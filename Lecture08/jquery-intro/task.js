$(() => {
  $(document.body)
    .append(
      $('<input>').attr('id', 'newtask')
    )
    .append(
      $('<button>')
      .text('ADD')
      .click(() => {
        $('#tasklist').append(
          $('<li>')
            .append(
              $('<button>').text('❌')
            )
            .append(
              $('<button>').text('⬆️')
            )
            .append(
              $('<button>').text('⬇️')
            )
            .append(
              $('<span>').text($('#newtask').val())
            )
        )
      })
    )
    .append(
      $('<ul>').attr('id', 'tasklist')
    )
})
