const { MongoClient } = require('mongodb')

const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL, (err, client) => {
  if (err) throw err

  const testdb = client.db('testdb')
  console.log(testdb)

  const people = testdb.collection('people')

  people.find({
    // city: 'Delhi'
    $or: [
      {age: {$gt: 11}},
      {age: {$lt: 10}}
    ]
  }).toArray((err, result) => {
    if (err) throw err

    console.log(result)
  })

})
