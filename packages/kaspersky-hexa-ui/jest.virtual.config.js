const base = require('./jest.config')

module.exports = {
  ...base,
  displayName: 'table (virtualized)',
  roots: ['<rootDir>/src/table'],
  setupFilesAfterEnv: [...base.setupFilesAfterEnv, '<rootDir>/setupVirtualTests.ts']
}
