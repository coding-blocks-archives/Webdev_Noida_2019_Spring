const express = require('express')
const { db } = require('./db')

const routes = {
  vendor: require('./routes/vendors'),
  products: require('./routes/products'),
  users: require('./routes/users'),
  cartitems: require('./routes/cartitems'),
}

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname + '/public'))

app.use('/api/vendors', routes.vendor)
app.use('/api/products', routes.products)
app.use('/api/users', routes.users)
app.use('/api/cartitems', routes.cartitems)

db.sync()
  .then(() => {
    app.listen(8888)
  })
  .catch(console.error)
