const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: './src/dist',
    filename: 'bundle.js'
  },
  debug: true,
  target: 'electron-renderer',
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      },
      { test: /(\.css|\.scss)$/, loaders: [ 'style', 'css', 'sass' ] },
      { test: /\.svg/, loader: 'svg-url-loader' }
    ]
  },
  plugins: [ new HtmlWebpackPlugin({
    template: './src/index.html'
  }), new webpack.DefinePlugin({
    NODE_PATH: path.join(__dirname, './node_modules')
  }) ]
}
