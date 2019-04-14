$(() => {
  setup()

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

  $('#logout').click(() => {
    delete localStorage.userId
    setup()
  })
})

function setup() {
  if (localStorage.userId) {
    // When user is logged in
    $('#products').show()
    $('#logout').show()
    $('#loginform').hide()
    refreshProducts()
  } else {
    // When user is logged out
    $('#products').hide()
    $('#logout').hide()
    $('#loginform').show()
  }
}

function refreshProducts() {
  $.get('/api/products', (data) => {
    $('#products').empty()
    $('#products').append(`
    <tr>
      <th>Name</th>
      <th>Vendor</th>
      <th>Price</th>
      <th>Buy</th>
    </tr>
    `)
    for (let p of data) {
      $('#products').append(`
        <tr>
          <td>${p.name}</th>
          <td>${p.vendor.name}</td>
          <td>${p.price / 100}</td>
          <td>
            <button onclick="addProductToCart(${p.id})">
              Add to Cart
            </button>
          </td>
        </tr>
      `)
    }
  })
}

function addProductToCart(productId) {

  $.post('/api/cartitems', {
    userId: localStorage.userId,
    productId
  }, (data) => {

  })

}
