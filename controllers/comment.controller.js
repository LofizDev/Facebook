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
    }
}

module.exports = commentController