'use strict';

const path = require('path');
const WebpackBar = require('webpackbar');

const cliConfig = require(path.resolve(__dirname, '../hupu.config.js'));
const hash = cliConfig && cliConfig.build && cliConfig.build.hash;


module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: hash ? `assets/[name].[${typeof hash === 'string' ? hash : 'contenthash'}:8].[ext]` : 'assets/[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new WebpackBar()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
  }
};
