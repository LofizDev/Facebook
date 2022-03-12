const router = require('express').Router()
const postController = require('../controllers/post.controller')
const auth = require('../middleware/auth')

router.route('/posts')
    .post(auth, postController.createPost)

module.exports = router