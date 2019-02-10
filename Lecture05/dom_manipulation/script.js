
document.body.append('ajhsbd')
console.log('hello')

// this way does not work
document.body.append('<div>asdasd</div>')

let div = document.createElement('div')

document.body.appendChild(div)
div.innerText = 'jhvihbvijhkbv'

console.log(document.body.innerHTML)

let myvar = document.getElementById('mydiv')
console.log(myvar.innerHTML)
console.log(myvar.innerText)
