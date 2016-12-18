const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./src/dist",
    filename: "bundle.js"
  },
  debug: true,
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
      { test: /(\.css|\.scss)$/, loaders: [ 'style', 'css', 'sass' ] }
    ]
  },
  plugins: [ new HtmlWebpackPlugin({
    template: './src/index.html'
  }) ]
}