module.exports = {
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint-config-fyapy-base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
}
