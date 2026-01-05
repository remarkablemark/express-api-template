import type { Config } from 'jest';

const jestConfig: Config = {
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

export default jestConfig;
