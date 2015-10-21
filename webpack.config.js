var fs = require('fs'),
    path = require('path'),
    webpack = require('webpack'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');

var dev = (process.env.NODE_ENV === 'DEV' ? true : false),
    debug = (process.env.DEBUG === 'true' ? true : false),
    production = (process.env.NODE_ENV === 'PROD' ? true : false);

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
            './src/',
            './src/components',
            './src/scripts/',
            './src/scripts/actions/',
            './src/scripts/containers/',
            './src/scripts/reducers/'
        ]
    },
    plugins: [
        new NyanProgressPlugin(),
        new webpack.DefinePlugin({
            __PROD__  : production,
            __DEV__   : dev,
            __DEBUG__ : debug
        })
    ]
};

// Production config
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
