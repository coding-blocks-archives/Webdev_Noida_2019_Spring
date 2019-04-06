
function hello(person: Person) {
  let greeting = "Hello"
  if (person.firstName) {
    greeting += ` ${person.firstName}`
  }
  if (person.lastName) {
    greeting += ` ${person.lastName}`
  }
  return greeting
}

interface Person {
  firstName: string
  lastName?: string
}

hello({
  firstName: 'John',
})
