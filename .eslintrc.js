module.exports = {
  parserOptions: {
    root: true,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react', 'import', 'simple-import-sort', 'sort-destructure-keys'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'react/destructuring-assignment': ['warn', 'always'],
    'react/jsx-filename-extension': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
    'simple-import-sort/sort': [
      'warn',
      {
        groups: [['^@?\\w', '^\\.'], ['^\\u0000']],
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
  },
  overrides: [
    {
      files: ['gatsby-browser.js', 'gatsby-ssr.js'],
      rules: {
        'react/jsx-filename-extension': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
