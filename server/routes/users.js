// Here is where we declare the modules and shit we will need
const express = require('express')
// Import the controllers and middleware
const { usersController } = require('../controllers/index')
const checkAuth = require('../middleware/check-auth')

// set up the router
const router = express.Router()

// get all users
router.get('/', checkAuth, usersController.index)

// make a new schedule
router.post('/', usersController.store)

// See one schedule
router.get('/:id', usersController.show)

// get rid of a schedule
router.delete('/:id', usersController.delete)

// update User
router.put('/:id', usersController.update)

module.exports = router
