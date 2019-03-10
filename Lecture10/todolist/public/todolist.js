$(() => {

  function refreshList() {
    $('#tasklist').empty()

    $.get(
      '/tasks',
      (data) => {
        for (let task of data) {
          $('#tasklist').append(
            $('<li>').text(task.name)
          )
        }
      }
    )
  }

  $('#addtask').click(() => {

    $.post(
      '/tasks',
      {
        name: $('#newtask').val()
      },
      (data) => {
        if (data.success == true) {
          refreshList()
        }
      }
    )

  })

  refreshList()

})
