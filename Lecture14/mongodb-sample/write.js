const { MongoClient } = require('mongodb')

const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL, (err, client) => {
  if (err) throw err

  const testdb = client.db('testdb')
  console.log(testdb)

  const people = testdb.collection('people')

  people.insertMany([
    {name: 'Abcd', age: 10, city: 'Delhi'},
    {name: 'Efgh', age: 12, city: 'Mumbai'},
    {name: 'Ijkl', age: 11, city: 'Delhi'},
    {name: 'Mnop', age: 9, city: 'Kolkata'},
    {name: 'Qrst', age: 10, city: 'Delhi'},
  ], (err, result) => {
    if (err) throw err

    console.log(result)
  })

})
