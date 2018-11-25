// Import the schedule constant explicitly
const { Schedule } = require('../models')

// show all schedules
exports.index = async (req, res) => {
  // query the DB of all schedules
  await Schedule.find().exec()
  .then(schedules => {
    res.json({ schedules: schedules})
  })
  .catch(err => {
    res.json({ error: err, message: 'Could not retrieve schedules'}).status(500)
  })
}

// Store a new schedule
exports.store = async (req, res) => {
  let schedule = new Schedule(req.body)
  // save it in the DB
  await schedule.save()
    .then(schedule => {
      // send a 201 and the new resource
      res.status(201).json({ data: schedule })
    })
    .catch(err => {
      let errStatus = err.name === 'ValidationError' ? 400 : 500
      res.status(errStatus).json({err: err})
    })
}

// This function is for looking at one schedule by their mongo id
exports.show = async (req, res) => {
  // Find a schedule
  await schedule.findById(req.params.id).exec()
  .then(schedule => {
    res.json({ schedule: schedule})
  })
  .catch(err => {
    res.json({ error: err, message: 'Could not retrieve schedule'}).status(500)
  })
}

// Delete a Schedule
exports.delete = async (req, res) => {
  // find the sneaky boye and make him go away
  await Schedule.findByIdAndRemove(req.params.id).exec()
  .then(() => {
    // let em know there aint no content no mo
    res.status(204).json()
  })
  .catch(err => {
    res.status(500).json({err: err})
  })
}

// Edit a schedule based on ID
exports.update = async (req, res) => {
  console.log(req.body)
  await Schedule
  .findByIdAndUpdate(req.params.id, req.body, { new: true })
  .exec()
    .then(schedule => {
      res.status(200).json({schedule: schedule})
    })
    .catch(err => {
      res.status(500).json({err: err})
    })
}
