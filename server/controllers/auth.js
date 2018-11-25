var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
const User = require('../models/user')

// register a new user
exports.register = async (req, res) => {
  console.log('Registering User')
  User.find({ email: req.body.email })
  .exec()
  .then(user => {
    if (user.length >= 1) {
      return res.status(409).json({
        message: 'User exists already'
      })
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err
          })
        } else {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
          })
          newUser
            .save()
            .then(result => {
              res.status(201).json({
                message: 'You have successfully signed up!'
              })
            })
            .catch(err => {
              console.log(err)
              res.status(500).json({
                error: err
              })
            })
        }
      })
    }
  })
}

  // login a user
exports.login = async (req, res) => {
  console.log('Loggin In')
  User.find({
    email: req.body.email
  })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).send({
            message: 'Unauthorized'
          })
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).send({
              message: 'Unauthorized'
            })
          }
          if (result) {
            const token = jwt.sign(
              {
                name: user[0].name
              },
              process.env.SECRET,
              {
                expiresIn: '1h'
              }
            )
            return res.status(200).send({
              message: 'Login Successful',
              token: token,
              name: user[0].name
            })
          }
          return res.status(401).send({
            message: 'Unauthorized'
          })
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          error: err
        })
      })
}
