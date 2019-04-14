$(() => {

  refreshVendors()

  $('#add').click(() => {
    $.post(
      '/api/vendors',
      {
        name: $('#name').val(),
      },
      (data) => {
        if (data.error) {
          return alert(data.error)
        }
        refreshVendors()
      },
    )
  })
})

function refreshVendors() {
  $.get('/api/vendors', (data) => {
    $('#vendors').empty()
    $('#vendors').append(
      `<tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    `)

    for (let vendor of data) {
      $('#vendors').append(
        `<tr>
          <td>${vendor.id}</td>
          <td>${vendor.name}</td>
        </tr>
    `)
    }
  })
}
