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

let x = read(F1)

x.catch((err) => {
  console.error(err)
})

setTimeout(() => {
  x.then((data) => {
    let nums = data.toString().split('\n')
    read(F2)
      .then((data) => {
        nums = nums.concat(data.toString().split('\n'))
        nums.sort((a, b) => (a - b))

        write(F3, nums.join('\n'))
          .then(() => {
            console.log('Done')
          })
          .catch((err) => {
            console.error(err)
          })
      })
      .catch((err) => {
        console.error(err)
      })
  })

}, 2000)








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
