const fs = require('fs')

const F1 = __dirname + '/in1.txt'
const F2 = __dirname + '/in2.txt'
const F3 = __dirname + '/sorted.txt'

function read(filename) {
  return new Promise((resolve, reject) => {

    fs.readFile(filename, (err, data) => {
      if (err) return reject(err)

      console.log('file has been read')
      resolve(data)
    })

  })
}

function write(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (err) => {

      if (err) return reject(err)

      resolve()

    })
  })
}
let nums = []
read(F1)
  .then((data) => {
    nums = nums.concat(data.toString().split('\n'))
    return read(F2)
  })
  .catch()
  .then((data) => {
    nums = nums.concat(data.toString().split('\n'))
    nums.sort((a, b) => (a - b))

    return write(F3, nums.join('\n'))
  })
  .then(() => {
    console.log('Done')
  })
  .catch((err) => {
    console.error(err)
  })







// fs.readFile(F1, (err, data) => {
//   if (err) throw err

//   let nums = data.toString().split('\n')

//   fs.readFile(F2, (err, data) => {
//     if (err) throw err

//     nums = nums.concat(data.toString().split('\n'))

//     nums.sort((a, b) => (a - b))

//     fs.writeFile(F3, nums.join('\n'), (err) => {
//       if (err) throw err

//       console.log('Done')

//     })

//   })
// })
