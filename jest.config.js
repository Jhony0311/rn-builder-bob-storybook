module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/lib/',
    '<rootDir>/_old/',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
