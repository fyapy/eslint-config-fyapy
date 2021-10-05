module.exports = {
  extends: ['eslint-config-fyapy-base'],
  plugins: ['unicorn'],
  rules: {
    'unicorn/filename-case': ['error', {
      'case': 'camelCase',
      'ignore': [/([0-9]{14})_([A-z\W]+).ts$/],
    }],
  }
}
