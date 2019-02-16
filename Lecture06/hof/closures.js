function createCounter(init, delta) {

  function count() {
    init += delta
    return init
  }

  return count
}


let c1 = createCounter(3, 4)
console.log(c1())
console.log(c1())
console.log(c1())

let c2 = createCounter(2,8)
console.log(c2())
console.log(c2())
console.log(c2())
