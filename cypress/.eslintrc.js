module.exports = {
  root: true,
  plugins: ['cypress/recommended', 'eslint-plugin-cypress'],
  env: {'cypress/globals': true},
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
