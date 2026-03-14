module.exports = {
  moduleDirectories: ['src', 'node_modules'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'node',
  testEnvironmentOptions: { url: 'http://localhost/' },
  testMatch: ['**/*.test.+(ts|js)'],
  transform: {
    '^.+\\.(ts)$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.json',
      diagnostics: true
    }]
  }
}
