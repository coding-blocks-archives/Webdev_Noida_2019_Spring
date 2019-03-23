const socket = io()

setTimeout(() => {
  console.log('Connected ' + socket.id)
}, 2000)
