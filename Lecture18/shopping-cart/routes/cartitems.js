const route = require('express').Router()
const { CartItems, Products, Vendors } = require('../db')

route.get('/', async (req, res) => {
  const items = await CartItems.findAll({
    include: [
      {
        model: Products,
        include: [Vendors]
      }
    ],
    where: {
      userId: req.query.userId
    }
  })
  return res.send(items)
})

route.post('/', async (req, res) => {

  let item = await CartItems.findOne({
    where: {
      userId: req.body.userId,
      productId: req.body.productId
    }
  })

  if (!item) {
    item = await CartItems.create({
      userId: req.body.userId,
      productId: req.body.productId,
      quantity: 1
    })
  } else {
    await item.increment({
      quantity: 1
    })
  }
  return res.send(item)

})

module.exports = route
