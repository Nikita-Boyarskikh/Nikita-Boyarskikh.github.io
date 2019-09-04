const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

process.env.NODE_ENV = 'development';

const config = require('./config');
const common = require('./webpack.config.common');

const webpackConfig = {
  devtool: 'cheap-module-source-map',
  devServer: {
    port: config.devServer.port,
    contentBase: path.join(__dirname, '..', config.paths.public),
    publicPath: '/',
    useLocalIp: false,
    compress: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    https: false,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(common, webpackConfig);
