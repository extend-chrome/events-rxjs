module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/jest.setup.ts'],
  globals: {
    'ts-jest': {
      packageJson: './package.json',
      tsConfig: './tsconfig.json',
    },
  },
}
