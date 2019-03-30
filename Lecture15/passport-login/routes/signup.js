const { Users } = require('../db')
const route = require('express').Router()

route.get('/', (req, res) => {
  res.render('signup')
})

route.post('/', (req, res) => {
  Users.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).then((user) => {
    res.redirect('/login')
  }).catch((err) => {
    throw err
  })
})


module.exports = {
  route
}
