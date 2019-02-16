var x = 10
console.log(x)

function alpha() {
  console.log(x)
  var x = 20
  console.log(x)

  if (true) {
    var x = 30
    console.log(x)
  }
  console.log(x)
}

alpha()
console.log(x)
