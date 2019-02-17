function tellThis() {
  return this
}

let x = {
  t: tellThis,
  t2: function () {
    return tellThis()
  }
}

function MyClass () {

}
MyClass.prototype.tt = tellThis

let obj = new MyClass()

