const route = require('express').Router()

route.get('/', (req, res) => {
  res.render('login')
})

route.post('/', (req, res) => {

})


module.exports = {
  route
}
