const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authCtrl = {
    register: async (req, res) => {
        try {
            const { fullname, username, email, password, gender } = req.body
            let newUsername = username.toLowerCase().replace(/ /g,'')
            
            const user_name = await Users.findOne({username: newUsername})
            if(user_name) return res.status(400).json({msg:"This username already exist"})

            const user_email = await Users.findOne({email: email})
            if(user_email) return res.status(400).json({msg:"This email already exist"})

            if(password < 6) 
            return res.status(400).json({msg:"Password must be at least 6 character"})

            const passwordHast = await bcrypt.hash(password,12)
            
            const newUser = new Users({
                fullname,username:newUsername,email,password:passwordHast,gender
            })
            console.log(newUser);
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    login: async (req, res) => {
        try {

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req, res) => {
        try {
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    generateAccessToken: async (req, res) => {
        try {
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}




module.exports = authCtrl