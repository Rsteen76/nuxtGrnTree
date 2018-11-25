var mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema({
  date: Date,
  location: String,
  worshipLeader: String,
  meetingLeader: String,
  teacher: String,
  busyBees: String,
  nursery: String,
  logistics: String,
  mealTheme: String
})

module.exports = mongoose.model('Schedule', scheduleSchema)