module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:jest/recommended',
  ],
  plugins: [
    'jsx-a11y',
    'jest',
  ],
  rules: {
    'no-console': process.env.REACT_APP_ENV === 'production' ? 'off' : 'warn',
    "no-var": "error",
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    radix: ['error', 'as-needed'],
    'react/no-unstable-nested-components': ['off', { allowAsProps: true }],
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
    },
  ]
};
