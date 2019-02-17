function tellThis() {
  return this
}

let x = {
  t: tellThis,
  t2: function () {
    return tellThis()
  },
  t3: function () {
    return this.t()
  },
  t4: function () {
    return this.t2()
  }
}

function MyClass () {

}

MyClass.prototype.tt = tellThis
MyClass.prototype.tt2 = function () {
  return tellThis()
}

let obj = new MyClass()

