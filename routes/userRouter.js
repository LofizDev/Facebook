const router = require('express').Router()
const auth = require('../middleware/auth')
const userController = require('../controllers/user.controller')

router.get('/search', userController.searchUser)

router.get('/user/:id', userController.getUser)

router.patch('/user', auth, userController.updateUserInfo)

router.patch('/user/:id/follow', auth, userController.follow)

router.patch('/user/:id/unfollow', auth, userController.unFollow)

module.exports = router