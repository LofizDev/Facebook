const Posts = require('../models/postModel')

const postController = {
    createPost: async (req, res) => {
        try {
            const { content, images, optionTextEffect } = req.body

            const newPost = new Posts({
                content, images, optionTextEffect, user: req.user._id
            })
            await newPost.save()

            res.json({ msg: 'Create Post', newPost })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getPosts: async (req, res) => {
        try {
            const posts = await Posts.find
                ({ user: [...req.user.following, req.user._id] })
                .sort('-createAt')
                .populate("user likes", "avatar username fullname")

            res.json({
                msg: 'Success',
                result: posts.length,
                posts
            })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    updatePost: async (req, res) => {
        try {
            const { content, images, optionTextEffect } = req.body

            const post = await Posts.findOneAndUpdate({ _id: req.params.id }, {
                content, images, optionTextEffect
            })
                .sort('-createAT')
                .populate("user likes", "avatar username fullname")

            res.json({
                msg: 'Updated Post',
                newPost: {
                    ...post._doc,
                    content, images, optionTextEffect
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}
module.exports = postController