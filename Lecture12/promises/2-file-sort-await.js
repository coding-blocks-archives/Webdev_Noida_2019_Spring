const fs = require('fs')
const util = require('util')

const F1 = __dirname + '/in1.txt'
const F2 = __dirname + '/in2.txt'
const F3 = __dirname + '/sorted.txt'

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)

async function sort () {

  let data1 = await read(F1)
  console.log(data1)
  console.log('data 1 read')
  let data2 = await read(F2)
    console.log('data 2 read')


  let nums = data1.toString().split('\n')
  nums = nums.concat(data2.toString().split('\n'))
  nums.sort((a, b) => (a - b))

  await write(F3, nums.join('\n'))
    console.log('sorted written')

  return 10

}

console.log('sort started')
sort().then((x) => {
  console.log('really really done ' + x)
})
console.log('sort ended')
