function Person (name, age) {
  this.name = name
  this.age = age
}
Person.prototype.species = 'homo sapiens'

let p = new Person('Harry Potter', 20)
let q = new Person('Ron Weasley', 20)

let a = {k: 1, l: 2}
