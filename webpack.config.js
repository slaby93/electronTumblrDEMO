const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')
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
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      },
            {test: /(\.css|\.scss)$/, loaders: ['style', 'css', 'sass']},
            {test: /\.svg/, loader: 'svg-url-loader'},
      {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=video:src'
      }, {
        test: /\.mp4$/,
        loader: 'url?limit=10000&mimetype=video/mp4'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      NODE_PATH: path.join(__dirname, './node_modules')
    }),
    new WebpackShellPlugin({
      onBuildEnd: ['electron .']
    })
  ]
}
