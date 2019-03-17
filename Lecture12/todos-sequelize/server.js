const express = require('express')
const {
  db,
  Tasks
} = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/todos', async (req, res) => {
  let newItem = await Tasks.create({
    name: req.body.name,
    description: req.body.description,
    done: req.body.done
  })

  res.send(newItem)
})

app.get('/todos', async (req, res) => {
  let whereClause = {}

  if (req.query.done) {
    whereClause.done = req.query.done === 'true'
  }

  let tasks = await Tasks.findAll({
    where: whereClause
  })
  res.send(tasks)
})

db.sync()
  .then(() => {
    app.listen(4567, () => {
      console.log('Server started')
    })
  })
