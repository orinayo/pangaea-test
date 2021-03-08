const wp = require('@cypress/webpack-preprocessor')
const findWebpack = require('find-webpack')

const webpackOptions = findWebpack.getWebpackOptions()
if (!webpackOptions) {
  throw new Error('Could not find Webpack in this project 😢')
}

const cleanOptions = {
  reactScripts: true,
  coverage: true,
  looseModules: true
}

findWebpack.cleanForCypress(cleanOptions, webpackOptions)

const options = {
  webpackOptions,
  watchOptions: {},
}

module.exports = wp(options)
