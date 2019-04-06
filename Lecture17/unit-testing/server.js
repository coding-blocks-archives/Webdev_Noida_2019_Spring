const express = require('express')
const { calcFare } = require('./fareutils')

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/fare', (req, res) => {


  let fare = calcFare(
    req.body.km,
    req.body.fare
  )

  res.send({
    fare
  })

})


app.listen(3222)
