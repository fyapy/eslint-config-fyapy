module.exports = {
  extends: [
    'plugin:react/recommended',
    'eslint-config-fyapy-base'
  ],
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    'react-hooks',
  ],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      // version: '17.0.0',
    },
  },
  env: {
    jest: true,
  },
  rules: {
    'react/sort-comp': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-find-dom-node': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-indent': ['error', 2], // resets identation for jsx markup to 2 spaces
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off', // allows jsx markup in .js files
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
  }
}
