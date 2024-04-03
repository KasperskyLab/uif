module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: { '\\.tsx?$': 'ts-jest', '\\.jsx?$': 'babel-jest' },
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^src$': '<rootDir>/src',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@src(.*)$': '<rootDir>/src/$1',
    '^@design-system(.*)$': '<rootDir>/design-system/$1',
    '^@helpers(.*)$': '<rootDir>/helpers/$1',
    '^@icons(.*)$': '<rootDir>/icons/$1',
    '^@style(.*)$': '<rootDir>/style/$1',
    '^@sb(.*)$': '<rootDir>/.storybook/$1'
  },
  preset: 'ts-jest',
  roots: [
    '<rootDir>/src',
    '<rootDir>/helpers'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$']
}
