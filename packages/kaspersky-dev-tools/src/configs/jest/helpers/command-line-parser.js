function parseCliConfig () {
  const argsArr = process.argv
  const testType = argsArr[2]
  return {
    type: testType
  }
}

module.exports = {
  parseCliConfig
}
