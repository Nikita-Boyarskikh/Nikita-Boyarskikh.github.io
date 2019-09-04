const webpackConfig = require('./webpack.config');

module.exports = {
  browser: true,
  clearMocks: true,
  moduleDirectories: webpackConfig.resolve.modules,
  modulePaths: webpackConfig.resolve.modules,
  moduleFileExtensions: webpackConfig.resolve.extensions.map((ext) =>
    ext.replace('.', '')
  ),
  roots: ['<rootDir>/src/tests'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,vue}'],
  coverageReporters: ['text-summary', 'json', 'html', 'lcov'],
  timers: 'fake',
  errorOnDeprecated: true,
  testMatch: ['<rootDir>/src/tests/suits/**/*.{js,vue}'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  setupFilesAfterEnv: [
    './src/tests/setupTests.js'
  ],
  testEnvironment: 'jsdom',
  testURL: 'https://nikita-boyarskikh.github.io',
  transform: {
    '^.+\\.(js|vue)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.s?css$': '<rootDir>/src/tests/transformers/cssTransformer.js',
    '^.+\\.svg$': '<rootDir>/src/tests/transformers/fileTransformer.js'
  }
};
