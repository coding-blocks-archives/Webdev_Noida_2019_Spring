const express = require('express')
const app = express()

function m1 (req, res, next) {
  console.log('running m1')
  if (req.query.m == 1) {
    return res.send('hello one')
  }
  next()
}

function m2 (req, res, next) {
  console.log('running m2')
  next()
}

function m3 (req, res, next) {
  console.log('running m3')
  next()
}

app.use(m1)
app.use(m2)
app.use(m3)

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(5555)
