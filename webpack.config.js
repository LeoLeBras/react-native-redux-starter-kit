var fs = require('fs'),
    path = require('path'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin'),
    webpack = require('webpack');

var config = {
  debug: true,
  devtool: 'source-map',
  entry: {
    'index.ios': ['./src/index.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', 'jsx'],
    modulesDirectories: [
      './node_modules/',
      './src/modules/',
      './src/assets/',
      './src/scripts/',
      './src/scripts/containers/'
    ]
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
    ],
  },
  plugins: [
    new NyanProgressPlugin()
  ]
};

module.exports = config;