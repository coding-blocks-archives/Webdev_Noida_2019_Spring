let x = 10;

console.log(typeof x)

function greet (name) {
  console.log('Hello ' + name)
}

function hello (name) {
  console.log('Hello ' + name)
}

let y = greet
let z = greet()
console.log(z)
console.log(y)
console.log(typeof y)

function takeGreeting(greeter) {
  greeter()
}

takeGreeting(y)
