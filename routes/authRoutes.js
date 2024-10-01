const express = require('express')
const { registerController ,loginController,currentUserController  } = require('../controllers/authController');
const authMiddle = require('../controllers/authMiddleware');
const router = express.Router()

// routes

router.post('/register',registerController );

router.post('/login' ,loginController );

router.get("/current-user",authMiddle, currentUserController)

module.exports = router