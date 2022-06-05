const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    content: String,
    images: {
        type: Array,
        default: []
    },
    optionTextEffect: String,
    loves: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    wows: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    yays: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    angrys: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    hahas: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    sads: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
    user: { type: mongoose.Types.ObjectId, ref: 'user' }
},
    { timestamps: true })

module.exports = mongoose.model('post', postSchema)