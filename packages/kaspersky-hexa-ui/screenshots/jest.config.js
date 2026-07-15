module.exports = {
  testRegex: './*\\.test\\.tsx$',
  setupFilesAfterEnv: ['./setupTests.ts'],
  transform: { '\\.tsx?$': 'ts-jest', '\\.jsx?$': 'babel-jest' }
}
