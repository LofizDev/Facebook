const router = require('express').Router()
const commentController = require('../controllers/comment.controller')
const auth = require('../middleware/auth')

router.post('/comment', auth, commentController.createComment)

router.patch('/comment/:id/like', auth, commentController.likeComment)

router.patch('/comment/:id/unlike', auth, commentController.unLikeComment)

router.delete('/comment/:id', auth, commentController.deleteComment)

module.exports = router