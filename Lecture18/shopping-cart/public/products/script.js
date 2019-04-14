$(() => {
  loadVendorList()
  refreshProducts()

  $('#add').click(() => {

    $.post('/api/products', {
      name: $('#name').val(),
      quantity: $('#quantity').val(),
      price: $('#price').val(),
      vendorId: $('#vendor').val(),
    }, (data) => {

      if (data.error) {
        return alert(data.error)
      }

      refreshProducts()
    })
  })

})

function refreshProducts() {

  $.get('/api/products', (data) => {

    $('#products').empty()
    $('#products').append(`
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Vendor</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
    `)
    for (let p of data) {
      $('#products').append(`
        <tr>
          <th>${p.id}</th>
          <th>${p.name}</th>
          <th>${p.vendor.name}</th>
          <th>${p.price / 100}</th>
          <th>${p.quantity}</th>
        </tr>
      `)
    }

  })
}

function loadVendorList () {
  $.get('/api/vendors', (data) => {

    $('#vendor').empty()
    for (let vendor of data) {
      $('#vendor').append(`
      <option value="${vendor.id}">${vendor.name}</option>
      `)
    }
  })
}
