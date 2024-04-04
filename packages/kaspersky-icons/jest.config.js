module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules'],
  preset: 'ts-jest'
}
