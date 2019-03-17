const fs = require('fs')


fs.readFile(
  __dirname + '/in.txt',
  (err, data) => {
    console.log(data.toString())
    let nums = data.toString().split('\n')
    console.log(nums)
    let evenNums = nums.filter(n => (n%2 == 0))
    console.log(evenNums)

    fs.writeFile(
      __dirname + '/out.txt',
      evenNums.join('\n'),
      (err) => {
        if (err) throw err

        console.log('Write done')
      }
    )
  }
)

