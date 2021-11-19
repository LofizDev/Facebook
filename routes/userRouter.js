 const router = require('express').Router()
 const userController = require('../controllers/user.controller')

 router.get('/search', userController.searchUser)

 router.get('/getUser', userController.getUser)

 module.exports = router