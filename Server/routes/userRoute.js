const express = require('express')
const {registerController, loginController} = require('../controller/userContoller')


// ruetr object
const router = express.Router()

// router
// post
router.post('/login', loginController)

router.post('/register', registerController)


// export
module.exports = router
