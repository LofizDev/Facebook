const router = require('express').Router()
const postController = require('../controllers/post.controller')
const auth = require('../middleware/auth')

router.route('/posts')
    .post(auth, postController.createPost)
    .get(auth, postController.getPosts)

module.exports = router