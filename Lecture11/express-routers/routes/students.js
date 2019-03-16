const express = require('express')

let students = [
  {name: 'Student1', grade: 2},
  {name: 'Student2', grade: 6},
  {name: 'Student3', grade: 4},
  {name: 'Student4', grade: 7},
]

const route = express.Router()

route.get('/', (req, res) => {
  res.send(students)
})

module.exports = route
