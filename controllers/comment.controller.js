const Comments = require('../models/commentModel')
const Posts = require('../models/postModel')

const commentController = {
    createComment: async (req, res) => {
        try {
            const { postId, content, image, dataSong, tag, reply } = req.body

            const newComment = new Comments({
                user: req.user._id, content, image, dataSong, tag, reply
            })
            await Posts.findOneAndUpdate({ _id: postId }, {
                $push: { comments: newComment._id }
            }, { new: true })

            await newComment.save()
            res.json({ newComment })
        } catch (error) {

        }
    },
    likeComment: async (req, res) => {
        try {
            const comment = await Comments.find({ _id: req.params.id, likes: req.user._id })
            if (comment.length > 0) return res.status(4000).json({ msg: "You liked this post" })


            await Comments.findOneAndUpdate({ _id: req.params.id }, {
                $push: { likes: req.user._id }
            }, { new: true })

            res.json({ msg: 'Liked Commnent' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    unLikeComment: async (req, res) => {
        try {
            await Comments.findOneAndUpdate({ _id: req.params.id }, {
                $pull: { likes: req.user._id }
            }, { new: true })

            res.json({ msg: 'UnLiked Commnent' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = commentController