
// window.onload = function () {
//   alert('script loaded')

//   console.log('window loaded')
// }
// console.log('script loaded')


$(() => {

  $('#addtask').click(() => {
    $('#tasklist').append(
      $('<li>').text($('#newtask').val())
    )
  })

})
