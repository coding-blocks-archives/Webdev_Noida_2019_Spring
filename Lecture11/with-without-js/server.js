const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'hbs')

let tasklist = []

app.use('/', express.static(__dirname + '/public'))

app.get('/tasks', (req, res) => {
  if (req.query.mode == 'json') {
    return res.send(tasklist)
  }

  res.render('todos', {
    tasklist
  })
})

app.post('/tasks', (req, res) => {
  tasklist.push({
    task: req.body.task
  })
  if (req.query.mode == 'json') {
    return res.send(tasklist)
  }
  res.redirect('/tasks')
})


app.listen(4321, () => {
  console.log('Server started')
})
