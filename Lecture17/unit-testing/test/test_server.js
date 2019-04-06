const { app } = require('../server')
const { expect } = require('chai')
const axios = require('axios')

const BASE_URL = 'http://localhost:2121'

let srv
before(() => {
  srv = app.listen(2121)
})

describe('server tests', () => {
  it('should be  25  for 0km, 0min', (done) => {
    axios.get(`${BASE_URL}/fare?km=0&min=0`)
      .then((response) => {
        expect(response.data.fare).to.equal(25)
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
  it('should be  25  for 0km, NO min', (done) => {
    axios.get(`${BASE_URL}/fare?km=0`)
      .then((response) => {
        expect(response.data.fare).to.equal(25)
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})

after(() => {
  srv.close()
})
