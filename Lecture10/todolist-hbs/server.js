const express = require('express')

const app = express()

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let tasklist = []

app.get('/tasks', (req, res) => {
  res.render('tasks', {
    tasklist
  })
})

app.post('/tasks', (req, res) => {
  tasklist.push({
    task: req.body.task,
    priority: +(req.body.priority || 1)
  })
  res.redirect('/tasks')
})
app.listen(8989)
