const express = require('express')

const app = express()

const webpackConfig = require('./build/webpack.dev.config.js')

const compiler = require('webpack')(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath
})
app.use(devMiddleware)

app.use(require('webpack-hot-middleware')(compiler))

app.listen(3000, err => {
  if (err) {
    console.log(err)
    return
  }
})