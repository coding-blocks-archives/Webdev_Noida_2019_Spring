
function add (n) {
  function addMore(m) {
    if (typeof m == 'undefined') {
      return n
    }
    n += m
    return addMore
  }
  return addMore
}


let x = add(1)(2)(3)()
console.log(x) // 6

let y = add(1)(2)()
console.log(y) // 3

let z = add(4)(5)(2)(1)()
console.log(z) // 12
