const route = require('express').Router()

route.get('/', (req, res) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  res.render('profile', {
    user: req.user
  })
})

module.exports = {
  route
}
