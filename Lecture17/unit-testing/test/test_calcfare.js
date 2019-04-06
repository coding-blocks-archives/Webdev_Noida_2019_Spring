const { expect } = require('chai')
const { calcFare } = require('../fareutils')

describe('fare tests', () => {
  it('should be 25 for 0km, 0min', () => {

    let fare = calcFare(0, 0)

    expect(fare).to.be.a('number')
    expect(fare).to.equal(25)

  })

  it('should be 33 for 3km, 0min', () => {

    let fare = calcFare(3, 0)

    expect(fare).to.be.a('number')
    expect(fare).to.equal(33)

  })

  it('should be 38 for 3km, 20min', () => {

    let fare = calcFare(3, 20)

    expect(fare).to.be.a('number')
    expect(fare).to.equal(38)

  })
})
