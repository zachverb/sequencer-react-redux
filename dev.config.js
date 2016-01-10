'use strict';

var path = require('path');
var webpack = require('webpack');
var ROOT_DIR = __dirname;

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/dev-server',
    './client/index.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  historyApiFallback: true,
  output: {
    path: path.join(ROOT_DIR, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8081/build/'
  },
  module: { 
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: path.join(ROOT_DIR, 'node_modules')},
      { test: /\.less$/, loaders: ["style", "css", "less"]},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" } 
    ]
   }
}
