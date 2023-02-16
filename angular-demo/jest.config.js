const { pathsToModuleNameMapper } = require('ts-jest/utils');
const config = require('./tsconfig.spec.json');
// if your node version or setting does not support importing json
// use fs to read the content and JSON.parse
// ts-jest util support mapper function, 
// or you can manually write it.
const paths = pathsToModuleNameMapper(config.compilerOptions.paths, { prefix: '<rootDir>/' })
// basic info, and you can add more 
module.exports = {
  preset: 'jest-preset-angular',
  //automatically clear mocks between tests
  clearMocks: true, 
  
  // test file name matcher
  testMatch: ["**/__tests__/**/*.[tj]s", "**/*.(test|spec).[tj]s"], 
  
  // test environment setting file 
  setupFilesAfterEnv: ['<rootDir>/jestSetup.ts'],
  
  // test coverage, if your coverage rate it high
  collectCoverage: false,
  
  moduleFileExtensions: ['ts', 'js'],
  
  // for location.href
  testURL: 'http://localhost', 
  
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/builds/',
  ],
  // paths 
  moduleNameMapper: paths,
  globals: {
    'ts-jest': {
      'tsconfig': '<rootDir>/tsconfig.spec.json',
      'stringifyContentPathRegex': '\\.html$',
    },
  },
};