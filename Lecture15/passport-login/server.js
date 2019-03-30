const express = require('express')
const {
  db
} = require('./db')

const app = express()

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/login', (require('./routes/login').route))
app.use('/signup', (require('./routes/signup').route))


db.sync()
  .then(() => {
    app.listen(8877, () => {
      console.log('Started on http://localhost:8877')
    })
  })
