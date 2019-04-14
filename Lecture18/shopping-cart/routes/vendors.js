const route = require('express').Router()
const { Vendors } = require('../db')

route.get('/', async (req, res) => {

  const vendors = await Vendors.findAll()
  res.send(vendors)

})

route.post('/', async (req, res) => {
  if (!req.body.name) {
    return res.send({error: 'Name not given'})
  }

  const vendor = await Vendors.create({
    name: req.body.name
  })
  res.send(vendor)

})

module.exports = route
