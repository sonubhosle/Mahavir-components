import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  testMatch: ['<rootDir>/src/**/*.(test|spec).ts?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(swiper)/)"
  ],
moduleNameMapper: {
  '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
  '^swiper/css$': '<rootDir>/__mocks__/styleMock.js',
  '^swiper/css/.*$': '<rootDir>/__mocks__/styleMock.js',
  '^swiper/react$': '<rootDir>/__mocks__/swiper/react.js',
   '^swiper/modules$': '<rootDir>/__mocks__/swiper/modules.js',
},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
};

export default config;
