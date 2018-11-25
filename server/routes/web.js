const express = require('express')

// Set up the router
const router = express.Router()

// Send back the index.html containing the Vue Application
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../dist/index.html'))
})

module.exports = router
