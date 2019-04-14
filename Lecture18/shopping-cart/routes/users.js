const route = require('express').Router()
const { Users } = require('../db')

route.get('/:id', async (req, res) => {
  const user = await Users.findOne({
    where: {
      id: req.params.id,
    },
  })
  if (!user) {
    return res.send({ error: 'No such user found' })
  }
  res.send(user)
})

route.post('/', async (req, res) => {
  try {
    let user = await Users.findOne({
      where: {
        username: req.body.username,
      },
    })

    if (!user) {
      user = await Users.create({
        username: req.body.username,
      })
    }

    res.send(user)
  } catch (err) {
    res.send({ error: err })
  }
})

module.exports = route
