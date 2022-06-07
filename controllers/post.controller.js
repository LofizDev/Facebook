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
                .populate("user likes loves hahas sads wows yays angrys", "avatar username fullname")
                .populate({
                    path: 'comments',
                    populate: {
                        path: "user likes loves hahas sads wows yays angrys",
                        select: "-password"
                    }
                })
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
                .populate("user likes loves hahas sads yays angrys", "avatar username fullname")

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
    likePost: async (req, res) => {
        try {
            const str = req.body.str
            if (str === 'love') {
                await Posts.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { loves: req.user._id }
                }, { new: true })
            }
            if (str === 'like') {
                await Posts.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { likes: req.user._id }
                }, { new: true })
            }
            if (str === 'haha') {
                await Posts.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { hahas: req.user._id }
                }, { new: true })
            }
            if (str === 'wow') {
                await Posts.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { wows: req.user._id }
                }, { new: true })
            }
            if (str === 'angry') {
                await Posts.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { angrys: req.user._id }
                }, { new: true })
            }
            if (str === 'sad') {
                await Posts.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { sads: req.user._id }
                }, { new: true })
            }
            if (str === 'yay') {
                await Posts.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { yays: req.user._id }
                }, { new: true })
            }

            res.json({ msg: str })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    unLikePost: async (req, res) => {
        try {
            await Posts.findOneAndUpdate({ _id: req.params.id }, {
                $pull: {
                    likes: req.user._id, loves: req.user._id,
                    angrys: req.user._id, hahas: req.user._id,
                    yays: req.user._id, sads: req.user._id, wows: req.user._id
                }
            }, { new: true })

            res.json({ msg: 'UnLiked Post!' })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = postController