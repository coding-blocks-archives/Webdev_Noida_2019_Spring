const route = require('express').Router()
const { Products, Vendors } = require('../db')

route.get('/', async (req, res) => {
  const products = await Products.findAll({
    include: [Vendors]
  })

  res.send(products)
})

route.post('/', async (req, res) => {
  try {
    const product = await Products.create({
      name: req.body.name,
      quantity: parseInt(req.body.quantity),
      price: parseInt(req.body.price * 100),
      vendorId: parseInt(req.body.vendorId),
    })

    res.send(product)
  } catch (err) {
    res.send({error: err})
  }
})

module.exports = route
