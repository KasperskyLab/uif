function Dictionary () {
  const store = {}

  return {
    add: function (key, val) {
      store[key] = val
    },
    get: function (key) {
      return store[key]
    },
    remove: function (key) {
      delete store[key]
    }
  }
}

module.exports = Dictionary
