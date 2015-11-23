'use strict';

const open = require('open');
const karma = require('karma');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const PORT = 8000;

open('http://localhost:' + PORT);

const server = new karma.Server({
  configFile: __dirname + '/karma.conf.js',
  autoWatch: true,
  singleRun: false
});

server.start();

module.exports = {
  entry: __dirname + '/src/entry.js',
  devtool: 'source-map',
  output: {
    filename: 'angular-bootstrap-calendar.js'
  },
  module: {
    preLoaders: [{
      test: /.*\.js$/,
      loaders: ['eslint'],
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'htmlhint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.less$/,
      loader: 'style!css!less',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'html',
      exclude: /node_modules/
    }]
  },
  devServer: {
    port: PORT,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
    new webpack.DefinePlugin({
      EXCLUDE_TEMPLATES: false
    })
  ]
};
