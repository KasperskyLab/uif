const base = require('./jest.config')

/**
 * Second pass over the table's own test suites with virtualization turned on for every table the
 * harness renders. See src/table/test-utils/virtualMode.ts for why this exists and what it proves.
 *
 *   npm run test:virtual
 */
module.exports = {
  ...base,
  displayName: 'table (virtualized)',
  roots: ['<rootDir>/src/table'],
  setupFilesAfterEnv: [...base.setupFilesAfterEnv, '<rootDir>/setupVirtualTests.ts']
}
