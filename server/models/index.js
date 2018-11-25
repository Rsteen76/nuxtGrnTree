// Bring in the seperate models
const User = require('./user')
const Schedule = require('./schedule')

// Import other models in the same manner

// Export models in a bundle
module.exports = {
  User,
  Schedule

}
