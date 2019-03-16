const express = require('express')

const routes = {
  students: require('./routes/students'),
  teachers: require('./routes/teachers')
}

const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

app.use('/mentors', routes.teachers)
app.use('/students', routes.students)

app.listen(8765)
