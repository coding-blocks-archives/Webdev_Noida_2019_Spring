const fs = require('fs')

const F1 = __dirname + '/in1.txt'
const F2 = __dirname + '/in2.txt'
const F3 = __dirname + '/sorted.txt'

fs.readFile(F1, (err, data) => {
  if (err) throw err

  let nums = data.toString().split('\n')

  fs.readFile(F2, (err, data) => {
    if (err) throw err

    nums = nums.concat(data.toString().split('\n'))

    nums.sort((a, b) => (a - b))

    fs.writeFile(F3, nums.join('\n'), (err) => {
      if (err) throw err

      console.log('Done')

    })

  })
})
