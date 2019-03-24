const socket = io()

socket.on('connect', () => {
    console.log('Connected ' + socket.id)
})

socket.on('chat_rcvd', (data) => {
  $('#chats').append(
    $('<li>').text(
      `${data.username}: ${data.msg}`
    )
  )
})

$(() => {
  $('#chatbox').hide()

  $('#login').click(() => {
    socket.emit('login', {
      username: $('#username').val()
    })
  })

  socket.on('loggedin', () => {
    console.log('Login successful')
    $('#loginform').hide()
    $('#chatbox').show()
  })

  $('#send').click(() => {
    console.log('Sending chat')
    socket.emit('chat', {msg: $('#msg').val()})
  })
})
