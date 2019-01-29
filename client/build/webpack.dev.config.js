const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = merge(base, {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '..', './src/index.js')
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})