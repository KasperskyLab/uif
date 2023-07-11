/**
 * Object containing test options valid for EVERY config applied to NWC
 */
const commonTestsConfig = {
  rootDir: process.cwd(),
  testEnvironment: 'node',
  moduleNameMapper: {
    '@root(.*)$': '<rootDir>/$1'
  },
  transform: {}
}

/**
 * Object containing default test settings for unit testing and special testing of files.
 * Not applicable to server or e2e testing.
 */
const clientReporters = ['default']
const clientTestsConfig = {
  ...commonTestsConfig,
  reporters: clientReporters,
  testMatch: ['**/tests/client/**/*.test.js'],
  transform: null,
  collectCoverage: shouldCollectCoverage(),
  collectCoverageFrom: [
    '<rootDir>/client/**',
    '!<rootDir>/client/**/*.json',
    '!<rootDir>/client/**/css/**',
    '!<rootDir>/client/components/index.js'
  ]
}

/**
 * Object containing all configurations to test only server files. Not applicable to e2e or unit testing of client code.
 */
const serverReporters = ['default']
const serverTestsConfig = {
  ...commonTestsConfig,
  reporters: serverReporters,
  testMatch: ['**/tests/server/**/*.test.js'],
  collectCoverage: shouldCollectCoverage(),
  collectCoverageFrom: [
    '<rootDir>/server/**/*.js'
  ]
}

/**
 * Object containing all configurations applied to e2e testing ONLY. Not applicable to unit or server testing.
 */
const e2eReporters = ['default']
const e2eTestsConfig = {
  ...commonTestsConfig,
  reporters: e2eReporters,
  testMatch: ['**/tests/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/e2e/e2e-tests-setup.js'],
  globals: {
    page: null
  },
  transform: null
}

/**
 * Mnemon tests configuration, run tests only from mnemon directory
 */
const e2eMnemonReporters = ['default']
const e2eMnemonTestsConfig = {
  ...commonTestsConfig,
  reporters: e2eMnemonReporters,
  testMatch: ['**/mnemon/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/e2e/e2e-tests-setup.js'],
  globals: {
    page: null
  }
}

/**
 * Object, which includes all possible jest test configurations. Extendable.
 */
const testTypeEnum = {
  common: commonTestsConfig,
  e2e: e2eTestsConfig,
  mnemon: e2eMnemonTestsConfig,
  server: serverTestsConfig,
  client: clientTestsConfig
}

/**
 * Function to set collect coverage option to truthy or falsy conditions
 * @returns { Boolean } should coverage be collected or not
 */
function shouldCollectCoverage () {
  const conditions = [
    process.env.COLLECT_COVERAGE
  ]
  const collectCoverage = conditions.some((condition) => condition)
  return collectCoverage
}

/**
 * Adds junit reporters to collect and display coverage on CI
 */
if (process.env.CI) {
  clientReporters.push([
    'jest-junit', {
      outputName: './client_report.xml'
    }
  ])
  serverReporters.push([
    'jest-junit', {
      outputName: './server_report.xml'
    }
  ])
  e2eReporters.push([
    'jest-junit', {
      outputName: './e2e_report.xml'
    }
  ])
  e2eMnemonReporters.push([
    'jest-junit', {
      outputName: './e2e_mnemon_report.xml'
    }
  ])
}

/**
 * Function to parse second argument form jest call. Expects TEST_TYPE to follow strictly AFTER `jest` command.
 * Example: jest TEST_TYPE --runInBand ...
 * Applicable values for TEST_TYPE: 'base', 'e2e', 'server'.
 * If no TEST_TYPE passed will use 'base' option.
 */
const getApplicationsConfig = function (testType) {
  const defaultOption = 'common'
  const config = testTypeEnum[testType] || testTypeEnum[defaultOption]
  return config
}

module.exports = { getApplicationsConfig }
