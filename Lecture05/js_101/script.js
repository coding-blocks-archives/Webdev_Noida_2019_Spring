console.log('Hello')

let x = 10;
x = 11;
console.log(x)

const y = 20;
// y = 22; // cannot do this

const obj = {a: 10, b: 20}

console.log(obj)

obj.a = 2321
obj.c = 'adg'
delete obj.b

console.log(obj)

function sayHello(name) {
  console.log('Hello ' + name)
}

sayHello('John')
sayHello()
sayHello('John', 'Jane')
