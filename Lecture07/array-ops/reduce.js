let arr = [
  6,3,9,2,88,12,65
]
console.log(arr)
let x = arr.reduce(
  function(accum, value, index, array) {
    console.log('accum ' + accum)
    console.log('value ' + value)
    return accum + value
  }
)
