module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
