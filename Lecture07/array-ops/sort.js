
let arr = [123, 111, 121, 134, 12, 11, 13, 6,2,9,1,8, 22, 17]
console.log(arr)
let arr2 = arr.sort()
console.log(arr)

let arrx = [1,67, 1, true, false, '23', '3']

console.log(arrx)
arrx.sort()
console.log(arrx)

arr.sort((a, b) => {
  console.log(a + ' ' + b)
  return b - a
})

console.log(arr)
