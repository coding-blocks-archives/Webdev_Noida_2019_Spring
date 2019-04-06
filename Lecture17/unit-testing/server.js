const express = require('express')
const { calcFare } = require('./fareutils')

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/fare', (req, res) => {
  let fare = calcFare(
    req.query.km,
    req.query.min
  )

  res.send({
    fare
  })

})

module.exports = {
  app
}
