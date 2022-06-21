const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    dataSong: Object,
    tag: Object,
    reply: mongoose.Types.ObjectId,
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    user: { type: mongoose.Types.ObjectId, ref: 'user' },
    PostId: mongoose.Types.ObjectId,
    postUserId: mongoose.Types.ObjectId
}, { timestamps: true })

module.exports = mongoose.model('comment', commentSchema)