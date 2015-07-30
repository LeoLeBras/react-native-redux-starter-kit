var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var config = {
  debug: true,
  devtool: 'source-map',
  entry: {
    'index.ios': ['./src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel?stage=0&blacklist=validation.react']},
    ],
  },
  plugins: []
};

module.exports = config;