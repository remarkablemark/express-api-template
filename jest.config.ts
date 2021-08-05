/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
