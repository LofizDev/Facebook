const Users = require('../models/userModel')

const userController = {
    // Search user
    searchUser: async (req, res) => {
        try {
            // Find all user by fullname   
            const users = await Users.find({ fullname: { $regex: req.query.username } })
                .limit(8).select("fullname avatar")

            // Result
            res.json({ users })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    // Profile user
    getUser: async (req, res) => {
        try {
            // Search user by id and dont get password
            const user = await Users.findById(req.params.id).select('-password')
            if (!user) return res.status(400).json({ msg: "User does not exist." })

            // Result
            res.json({ user })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = userController