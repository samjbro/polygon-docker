const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const resolve = file => path.resolve(__dirname, '..', file)

module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '#': resolve('assets'),
      'img': resolve('assets/images')
    }
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
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
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