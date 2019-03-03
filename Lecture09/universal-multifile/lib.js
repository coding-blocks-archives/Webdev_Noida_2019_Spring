function add (a, b) {
  return a + b
}

if (typeof window === 'undefined') {
  module.exports = {
    add
  }
}

