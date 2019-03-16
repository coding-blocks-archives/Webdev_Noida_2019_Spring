$(() => {
  function refreshList(tasklist) {
    $('#list').empty()

    for (let item of tasklist) {
      $('#list').append(
        $('<li>').text(item.task)
      )
    }
  }

  $('#add').click((ev) => {
    ev.preventDefault()

    $.post(
      '/tasks?mode=json',
      {
        task: $('#task').val()
      },
      (data) => {
        console.log(data)
        refreshList(data)
      }
    )
  })
})
