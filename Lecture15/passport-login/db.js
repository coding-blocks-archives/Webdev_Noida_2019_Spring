const  Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/users.db'
})

const Users = db.define('user', {
  username: {
    type: Sequelize.STRING(30),
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(30)
  }
})

module.exports = {
  db, Users
}
