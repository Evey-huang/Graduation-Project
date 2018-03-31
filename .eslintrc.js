module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  // extends: [
  //   // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  //   // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  //   'plugin:vue/essential'
  // ],
  // required to lint *.vue files
  plugins: [
    'vue', 'html'
  ],
  // add your custom rules here
  rules: {},
  globals: {}
}
