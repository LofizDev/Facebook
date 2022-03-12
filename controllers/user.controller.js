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
                .populate('followers following', '-password')
            if (!user) return res.status(400).json({ msg: "User does not exist." })

            // Result
            res.json({ user })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    // CRUD Info User
    updateUserInfo: async (req, res) => {
        try {
            const { avatar, bio, from, liveAt, relationship, hobbies } = req.body

            await Users.findOneAndUpdate({ _id: req.user._id }, {
                avatar, from, liveAt, relationship, hobbies, bio
            })

            res.json({ msg: "Update Success" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    // Follow
    follow: async (req, res) => {
        try {
            const user = await Users.find({ _id: req.params.id, followers: req.user._id })
            // Check is exist User
            if (user.length > 0) return res.status(500).json({ msg: "You followed this user." })

            // $push => Append value to an Array
            const newUser = await Users.findOneAndUpdate({ _id: req.params.id }, {
                $push: { followers: req.user._id }
            }, { new: true }).populate("followers following", "-password")
            // new: true => Returns a modified document

            await Users.findOneAndUpdate({ _id: req.user._id }, {
                $push: { following: req.params.id }
            }, { new: true })

            res.json({ newUser })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    // UnFollow
    unFollow: async (req, res) => {
        try {
            // $pull => Remo Items from an Array of Documentss
            const newUser = await Users.findOneAndUpdate({ _id: req.params.id }, {
                $pull: { followers: req.user._id }
            }, { new: true }).populate("followers following", "-password")
            // populate return object instead id

            await Users.findOneAndUpdate({ _id: req.user._id }, {
                $pull: { following: req.params.id }
            }, { new: true })

            res.json({ newUser })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = userController