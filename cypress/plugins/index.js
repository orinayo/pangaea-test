const path = require('path')
const fs = require('fs-extra')
const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)
  on('file:preprocessor', cypressTypeScriptPreprocessor)
  return getConfigurationByFile('development')
}
