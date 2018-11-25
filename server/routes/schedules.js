const express = require('express')
const { schedulesController } = require('../controllers/index')
const checkAuth = require('../middleware/check-auth')

// Set up the router
const router = express.Router()

// Get all schedules
router.get('/', schedulesController.index)

// Make a new Schedule
router.post('/', checkAuth, schedulesController.store)

// Show a Schedule
router.get('/:id', schedulesController.show)

// Delete Schedule
router.delete('/:id', checkAuth, schedulesController.delete)

// Update a schedule
router.put('/:id', checkAuth, schedulesController.update)

module.exports = router
