const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'some secret string',
  resave: false,
  saveUninitialized: true
}))


app.get('/hi', (req, res) => {
  res.send('Hello World!')
})

app.get('/bye', (req, res) => {
  res.send('See you later!')
})

app.listen(8765, () => {
  console.log('http://localhost:8765')
})
