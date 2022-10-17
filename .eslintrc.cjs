/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module',
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'prettier/prettier': ['error',
     {
       "singleQuote": true,
       "semi": false,
       "useTabs": false,
       "tabWidth": 2,
       "trailingComma": "all",
       "printWidth": 80,
       "bracketSpacing": true,
       "arrowParens": "avoid",
    }]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
}
