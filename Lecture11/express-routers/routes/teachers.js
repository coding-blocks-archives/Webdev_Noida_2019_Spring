const express = require('express')


let teachers = [
  {name: 'Teacher1', subjects: ['A', 'B']},
  {name: 'Teacher2', subjects: ['A', 'C']},
  {name: 'Teacher3', subjects: ['B', 'D']},
  {name: 'Teacher4', subjects: ['B', 'C']},
]
const route = express.Router()

route.get('/', (req, res) => {
  res.send(teachers)
})

module.exports = route
