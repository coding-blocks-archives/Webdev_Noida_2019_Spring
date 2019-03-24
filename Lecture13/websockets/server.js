const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app)
const io = socketio(server)

let idUserMap = {}

io.on('connection', (socket) => {
  console.log('Connected ' + socket.id)

  socket.on('login', (data) => {
    idUserMap[socket.id] = data.username
    socket.emit('loggedin')
  })

  socket.on('chat', (data) => {
    socket.broadcast.emit('chat_rcvd', {
      username: idUserMap[socket.id],
      msg: data.msg
    })
  })
})


app.use('/', express.static(
  __dirname + '/public'
))

server.listen(3333, () => {
  console.log(`Server started on
  http://localhost:3333`)
})
