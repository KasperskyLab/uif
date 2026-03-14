module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'ts-jest'
  }
}
