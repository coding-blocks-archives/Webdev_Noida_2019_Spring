const express = require('express')
const app = express()

function m1(req, res, next) {
  console.log('running m1')
  if (req.query.m == 1) {
    return res.send('hello one')
  }
  next()
}

function m2(req, res, next) {
  console.log('running m2')
  console.log(req.url)
  next()
}

function m3(req, res, next) {
  console.log('running m3')
  next()
}

app.use(m1)
app.use(m2)
app.use('/bye', m3) // /bye, /bye/....

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/bye', (req, res, next) => {
  if (req.query.end == 1) {
    return res.send('Goodbye')
  }
  next()
})

app.get('/bye', (req, res) => {
  res.send('Farewell')
})

app.listen(5555)
