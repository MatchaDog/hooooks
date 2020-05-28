'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  cache: true,
  devtool: false,
  // devtool: 'cheap-module-eval-source-map',
  optimization: {
    minimize: false,
  },
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.join(__dirname, '../src/index.tsx')
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../src')
  },
  module: {
    rules: [
      
      {
        test: /.css$/,
        oneOf: [
          {
            resourceQuery: /modules/,
            use: [
              'style-loader',
              { loader: 'css-loader', options: { modules: true } }
            ]
          },
          {
            use: ['style-loader', 'css-loader']
          }
        ]
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hooks',
      path: path.resolve(__dirname, '../src'),
      template: path.join(__dirname, '../src/index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HardSourceWebpackPlugin({
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock', 'hupu.config.js', 'babel.config.js', 'configs/*'],
      },
      info: {
        mode: 'none',
        level: 'slient'
      },
      cachePrune: {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 days
        sizeThreshold: 100 * 1024 * 1024 // 100 MB
      }
    })
  ]
});
