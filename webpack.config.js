'use strict';

var path = require('path');
var ROOT_DIR = __dirname;

module.exports = {
  devtool: 'inline-source-map',
  entry: './client/index.js',
  output: {
    path: path.join(ROOT_DIR, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: path.join(ROOT_DIR, 'node_modules')
    }, {
      test: /\.less$/,
      loaders: ["style", "css", "less"]
    }]
  },
  resolve: {
    extensions: ['', '.js', '.es6.js'],
    alias: {
      'actions': path.resolve(ROOT_DIR, 'client', 'actions'),
      'components': path.resolve(ROOT_DIR, 'client', 'components'),
      'containers': path.resolve(ROOT_DIR, 'client', 'containers'),
      'reducers': path.resolve(ROOT_DIR, 'client', 'reducers'),
      'stores': path.resolve(ROOT_DIR, 'client', 'stores')
    }
  },
  postcss: function() {
    return [autoprefixer({browsers: ['last 2 versions', 'safari 5', 'ie 9', 'ios 6', 'android 4']}), csswring];
  }
};