module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended', 'prettier/react'],
  plugins: ['prettier', 'react'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-unused-vars': 'warn',
    // 'react/jsx-filename-extension': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    // react-hooks/exhaustive-deps
  },
  settings: {
    react: {
      version: '16.12.0',
    },
  },
}
