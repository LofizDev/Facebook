const router = require('express').Router()
const postController = require('../controllers/post.controller')
const auth = require('../middleware/auth')

router.route('/posts')
    .post(auth, postController.createPost)
    .get(auth, postController.getPosts)

router.route('/post/:id')
    .patch(auth, postController.updatePost)

router.patch('/post/:id/like', auth, postController.likePost)
router.patch('/post/:id/unlike', auth, postController.unLikePost)
module.exports = router