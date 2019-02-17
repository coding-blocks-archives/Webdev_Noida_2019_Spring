class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  isAdult() {
    return this.age >= 18
  }
}

let h = new Person('Harry Potter', 20)
let r = new Person('Ron Weasley', 17)

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }
  get section () {
    return (this.grade <= 5) ? 'primary' : 'secondary'
  }

  set section (sec) {
    let index = ['primary', 'secondary'].indexOf(sec)
    if (index === -1) {
      console.error('Section can be only primary or secondary')
    }
    if (index === 0) {
      this.grade = 5
      this.age = 10
    }

    if (index === 1) {
      this.grade = 6
      this.age = 11
    }
  }

}

let s = new Student('Ashok', 10, 5)
let s2 = new Student('Neha', 13, 8)
