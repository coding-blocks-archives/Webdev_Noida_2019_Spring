const express = require('express')
const app = express()

app.get(
  '/',
  (req, res) => {
    res.send('Hello <b>World</b>')
  }
)

app.listen(2121)
