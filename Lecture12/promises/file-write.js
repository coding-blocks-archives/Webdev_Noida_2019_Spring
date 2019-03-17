const fs = require('fs')

const FILENAME = __dirname + '/file.txt'

fs.writeFile(
  FILENAME,
  'Hello World',
  (err) => {
    if (err) throw err

    console.log('File written')
  }
)

console.log('File write operation')
