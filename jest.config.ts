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
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(swiper)/)"
  ],
moduleNameMapper: {
  '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',

  // 🧩 specifically mock Swiper CSS
  '^swiper/css$': '<rootDir>/__mocks__/styleMock.js',
  '^swiper/css/.*$': '<rootDir>/__mocks__/styleMock.js',
},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
};

export default config;
