module.exports = {
  testRegex: './*\\.test\\.tsx$',
  setupFilesAfterEnv: ['./setupTests.js'],
  transform: { '\\.tsx?$': 'ts-jest', '\\.jsx?$': 'babel-jest' }
}
