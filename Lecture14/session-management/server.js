const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'some secret string',
  resave: false,
  saveUninitialized: true
}))

app.get('/hi', (req, res) => {
  if (!req.session.hiCounter) {
    req.session.hiCounter = 0
  }
  req.session.hiCounter++

  if (req.session.byeCounter && req.session.byeCounter > 0) {
    return res.send('Welcome Back!')
  }

  res.send('Hello World!')
})

app.get('/bye', (req, res) => {
  if (!req.session.byeCounter) {
    req.session.byeCounter = 0
  }
  req.session.byeCounter++

  if (!req.session.hiCounter) {
    return res.redirect('/hi')
  }
  res.send('See you later!')
})

app.listen(8765, () => {
  console.log('http://localhost:8765')
})
