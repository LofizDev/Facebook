const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authCtrl = {

    // REGISTER
    register: async (req, res) => {
        try {
            const { fullname, username, email, password, gender } = req.body
            // Convert to lowercase
            let newUsername = username.toLowerCase().replace(/ /g, '')

            // Check userName exist
            const user_name = await Users.findOne({ username: newUsername })
            if (user_name) return res.status(400).json({ msg: "This username already exist" })

            // Check email exist
            const user_email = await Users.findOne({ email: email })
            if (user_email) return res.status(400).json({ msg: "This email already exist" })

            // Check valid password
            if (password < 6)
                return res.status(400).json({ msg: "Password must be at least 6 characters" })

            // Password encryption
            const passwordHast = await bcrypt.hash(password, 12)

            // Create new user
            const newUser = new Users({
                fullname, username: newUsername, email, password: passwordHast, gender
            })
            
            // Authorization
            const access_token = createAccessToken({id: newUser._id})
            const refresh_token = createRefreshToken({id: newUser._id})

            // Generate Cookie
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30*24*60*60*1000 // 30days
            })

            // Save user in DB
            await newUser.save()

            res.json({
                msg: 'Register Success!',
                access_token,
                user: {
                    ...newUser._doc,
                    password: ''
                }
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    // LOG IN
    login: async (req, res) => {
        try {
            const { email,password } = req.body

            // Find user and not get password
            const user = await Users.findOne({email})
            .populate("followers following","-password")

            // Check account exists
            if(!user) return res.status(400).json({msg:"This email does not exist!!"})

            // Check valid password
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch) return res.status(400).json({msg:"Password is incorrect."})

            const access_token = createAccessToken({id: user._id})
            const refresh_token = createRefreshToken({id: user._id})

            res.cookie('refreshtoken', refresh_token, {
                httpOnly:true,
                path:'/api/refresh_token',
                maxAge:30*24*60*60*1000  //30days
            })

            res.json({
                msg:"Login Success",
                access_token,
                user:{
                    ...user._doc,
                    password:''
                }
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    // LOG OUT
    logout: async (req, res) => {
        try {
            // Clear cookie of user when logout
            res.clearCookie('refreshtoken',{path:'/api/refresh_token'})
            return res.json({msg:"Logged out"})
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    // Generate Token
    generateAccessToken: async (req, res) => {
        try {
            // Check token exist.
            const rf_token = req.cookies.refreshtoken
            if(!rf_token) return res.status(400).json({msg:"Please login now."})

            jwt.verify(rf_token,process.env.REFRESH_TOKEN_SECRET,async(err,result) => {
                if(err) return res.status(400).json({msg:"Please login now."})

                const user = await Users.findById(result.id).select('-password')
                .populate('followers following', '-password')

                if(!user) return res.status(400).json({msg:"This does not exist."})

                const access_token = createAccessToken({id:result.id})

                res.json({
                    access_token,
                    user
                })
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

// Handle create access_token and refresh_token
const createAccessToken = (payload) => {
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '30d'})
}


module.exports = authCtrl