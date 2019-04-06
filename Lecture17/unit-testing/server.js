const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/fare', (req, res) => {

  let km = parseFloat(req.query.km)
  let min = parseInt(req.query.min)

  let fare = 25 + ((km - 2) * 8) + (min -15)

  res.send({
    fare
  })

})


app.listen(3222)
