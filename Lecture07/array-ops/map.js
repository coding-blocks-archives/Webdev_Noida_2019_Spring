let arr = [
  5, 23, 35, 22, 23452, 1123,
  3, 43, 1, 42, 55
]


arr.forEach(function (value, index, array) {
  console.log(value)
})


let arr2 = arr.map(function (value) {
  if (value % 2 === 0) return 'even'
  else return 'odd'
})

let a = [1,2,3,4,5,6,7,8]
let b = a.map(Math.sqrt)
