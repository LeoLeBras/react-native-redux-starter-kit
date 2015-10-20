var fs = require('fs'),
    path = require('path'),
    webpack = require('webpack'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');

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
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            'node_modules',
            './src',
            './src/actions/',
            './src/components',
            './src/containers/',
            './src/reducers/'
        ]
    },
    plugins: [
        new NyanProgressPlugin()
    ]
};

// Production config
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
