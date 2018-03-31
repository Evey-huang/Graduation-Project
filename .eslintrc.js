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
  // required to lint *.vue files
  plugins: [
    'vue', 'html'
  ],
  // add your custom rules here
  rules: {},
  globals: {}
}
