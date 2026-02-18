module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: { '^.+\\.tsx?$': 'ts-jest', '^.+\\.jsx?$': 'babel-jest' },
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*Docs.tsx',
    '!src/**/stories/**',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}'
  ],
  coverageProvider: 'v8',
  coverageReporters: ['cobertura'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/helpers/style-mock.ts',
    '\\.module\\.scss$': 'identity-obj-proxy',
    '^src$': '<rootDir>/src',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@src(.*)$': '<rootDir>/src/$1',
    '^@design-system(.*)$': '<rootDir>/design-system/$1',
    '^@helpers(.*)$': '<rootDir>/helpers/$1',
    '^@sb(.*)$': '<rootDir>/.storybook/$1'
  },
  preset: 'ts-jest',
  roots: [
    '<rootDir>/src',
    '<rootDir>/helpers'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/src/table/__tests__/Filters/helpers.ts'],
  transformIgnorePatterns: ['/node_modules/(?!@xtem/xtem|other-module)', '/node_modules/', '\\.pnp\\.[^\\/]+$']
}
