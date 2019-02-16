function createGreeting(salutation) {

  function greet(name) {
    console.log(`${salutation} ${name}`)
  }

  return greet
}


let x = createGreeting('Good Morning')
x('Nancy')
x('John')

createGreeting('Hello')('Jane')
