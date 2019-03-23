const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app)
const io = socketio(server)

io.on('connection', (socket) => {
  console.log('Connected ' + socket.id)

  socket.on('chat', (data) => {
    console.log(socket.id + ' says ' + data.msg)
    socket.broadcast.emit('chat_rcvd', data)
  })
})


app.use('/', express.static(
  __dirname + '/public'
))

server.listen(3333, () => {
  console.log(`Server started on
  http://localhost:3333`)
})
