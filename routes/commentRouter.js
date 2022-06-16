const router = require('express').Router()
const commentController = require('../controllers/comment.controller')
const auth = require('../middleware/auth')

router.post('/comment', auth, commentController.createComment)

router.patch('/comment/:id/like', auth, commentController.likeComment)

router.patch('/comment/:id/unlike', auth, commentController.unLikeComment)

module.exports = router