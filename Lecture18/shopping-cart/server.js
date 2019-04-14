const express = require('express')
const { db } = require('./db')

const routes = {
  vendor: require('./routes/vendors')
}

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname + '/public'))

app.use('/api/vendors', routes.vendor)

db.sync()
  .then(() => {
    app.listen(8888)
  })
  .catch(console.error)
