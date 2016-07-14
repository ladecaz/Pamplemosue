const config = require('./webpack.config.js')
const path = require('path')

config.entry = path.resolve('./tests/index.js')
config.output.filename = 'bundle.test.js'

module.exports = config
