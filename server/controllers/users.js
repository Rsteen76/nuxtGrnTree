// Import the User constant explicitly
const {User} = require('../models')

// show all users
exports.index = async (req, res) => {
  // query the DB of all users
  await User.find().exec()
    .then(users => {
      res.json({
        users: users
      })
    })
    .catch(err => {
      res.json({
        error: err,
        message: 'Could not retrieve users'
      }).status(500)
    })
}

// Store a new user
exports.store = async (req, res) => {
  let user = new User(req.body)

  // save it in the DB
  await user.save()
    .then(user => {
      // send a 201 and the new resource
      res.status(201).json({
        data: user
      })
    })
    .catch(err => {
      let errStatus = err.name === 'ValidationError' ? 400 : 500
      res.status(errStatus).json({
        err: err
      })
    })
}

// this function is for looking at one user by their mongo id
exports.show = async (req, res) => {
  // Find User
  await User.findById(req.params.id).exec()
    .then(user => {
      res.json({
        user: user
      })
    })
    .catch(err => {
      res.json({
        error: err,
        message: 'Could not retrieve user'
      }).status(500)
    })
}

// ever wanted to make the users disappear
exports.delete = async (req, res) => {
  // find the sneaky boye and make him go away
  await User.findByIdAndRemove(req.params.id).exec()
    .then(() => {
      // let em know there aint no content no mo
      res.status(204).json()
    })
    .catch(err => {
      res.status(500).json({
        err: err
      })
    })
}

// edit a user based on ID
exports.update = async (req, res) => {
  await User
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .exec()
    .then(user => {
      res.status(200).json({
        user: user
      })
    })
    .catch(err => {
      res.status(500).json({
        err: err
      })
    })
}
