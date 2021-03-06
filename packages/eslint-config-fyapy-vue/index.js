const { readdirSync, existsSync } = require('fs')
const { resolve } = require('path')

const srcPath = resolve(process.cwd(), 'src')
const srcExist = existsSync(srcPath)

const foldersUnderSrc = srcExist
  ? readdirSync(srcPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
  : []

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
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'any',
        'component': 'always',
      },
      'svg': 'always',
      'math': 'always',
    }],
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-quotes': ['error', 'double', { 'avoidEscape': true }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-multi-spaces': ['error', {
      ignoreProperties: false,
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/one-component-per-file': 'error',
    'vue/require-prop-types': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': ['error', {
      atComponent: 'shorthand',
      default: 'shorthand',
      named: 'shorthand',
    }],
    'vue/require-explicit-emits': ['error', {
      allowProps: false,
    }],
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/no-v-html': 'off',
    'vue/this-in-template': ['error', 'never'],
    'vue/block-lang': ['error', {
      script: {
        lang: 'ts',
      },
    }],
    'vue/no-use-v-if-with-v-for': ['error', {
      allowUsingIterationVar: false,
    }],
    'vue/component-api-style': ['error',
      ['script-setup', 'composition'], // "script-setup", "composition", or "options"
    ],
    'vue/no-static-inline-styles': ['error', {
      allowBinding: true,
    }],
    'vue/no-useless-v-bind': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],
    'vue/no-useless-template-attributes': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/camelcase': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-setup-props-destructure': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        ...(srcExist
          ? {
            pathGroups: [
              {
                pattern: `{${foldersUnderSrc.join(',')}}/**`,
                group: 'index',
                position: 'before',
              },
              {
                pattern: `{${foldersUnderSrc.join(',')}}`,
                group: 'index',
                position: 'before',
              },
            ],
          }
          : {}),
        pathGroupsExcludedImportTypes: ['type'],
        groups: [
          'type',
          'builtin',
          'external',
          'index',
          'parent',
          'sibling',
        ],
      },
    ],
    'vue/block-tag-newline': ['error', {
      'blocks': {
        'template': {
          'singleline': 'always',
          'maxEmptyLines': 0,
        },
        'script': {
          'multiline': 'always',
          'maxEmptyLines': 0,
        },
      },
    }],
  },
}
