let arr = [
  1, 23, 64, 66, 24, 78, 99,
  45, 67, 210, 1123, 38, 69
]

let arr2 = arr.filter(
  function (value) {
    return (value % 3 === 0)
  }
)
