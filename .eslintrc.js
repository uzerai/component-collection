module.exports = { // eslint-disable-line no-undef
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  ignorePatterns: [
    '*.config.js'
  ],
  rules: {
    quotes: [1, 'single'],
    'array-bracket-newline': [1, 'consistent'],
    indent: [1, 2]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
