const HTMLPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    extensions: ['.js', '.vue']
  },
  output: {},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: './build/index.template.html',
      filename: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin()
  ]
}