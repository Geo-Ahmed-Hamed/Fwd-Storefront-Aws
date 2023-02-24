/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "ts", "jsx", "tsx", "json", "node"],
  roots: ["<rootDir>/src"], 
  testEnvironment: 'node',
};