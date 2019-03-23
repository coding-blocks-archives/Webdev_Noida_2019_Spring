const socket = io()

socket.on('connect', () => {
    console.log('Connected ' + socket.id)
})

socket.on('chat_rcvd', (data) => {
  $('#chats').append(
    $('<li>').text(data.msg)
  )
})

$(() => {
  $('#send').click(() => {
    console.log('Sending chat')
    socket.emit('chat', {msg: $('#msg').val()})
  })
})
