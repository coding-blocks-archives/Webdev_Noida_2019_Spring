$(() => {
  setup()
  $('#logout').click(() => {
    delete localStorage.userId
    setup()
  })

  $('#login').click(() => {
    $.post(
      '/api/users',
      {
        username: $('#username').val(),
      },
      (data) => {
        if (data.error) alert(data.error)
        else {
          alert(`Logged in as ${data.username}`)
          localStorage.userId = data.id
          setup()
        }
      },
    )
  })
})

function setup() {
  if (localStorage.userId) {
    // When user is logged in
    $('#cart').show()
    $('#logout').show()
    $('#loginform').hide()
    refreshCart()
  } else {
    // When user is logged out
    $('#cart').hide()
    $('#logout').hide()
    $('#loginform').show()
  }
}

function refreshCart() {
  $.get(
    `/api/cartitems?userId=${localStorage.userId}`,
    (data) => {
      $('#cart').empty()
      $('#cart').append(`
      <tr>
        <th>Name</th>
        <th>Vendor</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Amount</th>
      </tr>
      `)
      let total = 0
      for (let item of data) {
        let amount = item.quantity * (item.product.price)
        total += amount
        $('#cart').append(`
        <tr>
          <td>${item.product.name}</td>
          <td>${item.product.vendor.name}</td>
          <td>₹${item.product.price / 100}</td>
          <td>${item.quantity}</td>
          <td>
            ₹${amount / 100}
          </td>
        </tr>
      `)
      }
      $('#cart').append(`
      <tr>
        <th colspan="4">Total</th>
        <td>₹${total / 100}</td>
      </tr>
      `)
    }
  )
}
