const Users = require('../models/userModel')

const userController = {
    searchUser: async (req, res) => {
        try {
            // Find all user by fullname include uppercase and lowercase letters
            const users = await Users.find({ fullname: {$regex: req.query.username}})
            .limit(8).select("fullname avatar")

            // Result
            res.json({users})
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = userController