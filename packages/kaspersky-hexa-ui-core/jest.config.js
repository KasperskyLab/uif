module.exports = {
  moduleDirectories: ['src', 'node_modules'],
  modulePaths: ['<rootDir>'],
  testURL: 'http://localhost/',
  testMatch: ['**/*.test.+(ts|js)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      diagnostics: true
    }
  }
}
