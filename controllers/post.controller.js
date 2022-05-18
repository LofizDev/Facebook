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
            const posts = await Posts.find({ user: [...req.user.following, req.user._id] })

            res.json({
                msg: 'Success',
                result: posts.length,
                posts
            })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }

    }
}
module.exports = postController