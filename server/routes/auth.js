const express = require('express')

const {authController} = require('../controllers/index')

const router = express.Router()

// Register a user
router.post('/register', authController.register)

// Login a user
router.post('/login', authController.login)

module.exports = router
