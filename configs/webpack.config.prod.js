'use strict';

const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const commonConfig = require(path.resolve(__dirname, 'webpack.config.common.js'));
const { build } = require(path.resolve(__dirname, '../hupu.config.js'));
const {
  srcDir = path.resolve(__dirname, '../src/'),
  outDir = path.resolve(__dirname, '../lib/'),
  hash
} = build || {};

module.exports = merge(commonConfig, {
  module: {
    rules: [
      
      {
        test: /.css$/,
        oneOf: [
          {
            resourceQuery: /modules/,
            use: [
              MiniCssExtractPlugin.loader,
              { loader: 'css-loader', options: { modules: true } }
            ]
          },
          {
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          }
        ]
      }

    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          reduceIndents: false,
          autoprefixer: false
        }
      })
    ],
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        polyfill: {
          chunks: 'all',
          test: /(core-js|regenerator-runtime)/,
          enforce: true,
          name: 'polyfill',
          priority: 110
        },
        vendors: {
          chunks: 'all',
          test: /(react|react-dom|react-router|react-router-dom|redux|react-redux|mobx|mobx-react)/,
          enforce: true,
          name: 'vendors',
          priority: 100
        },
        commons: {
          chunks: 'all',
          test: /(axios)/,
          enforce: true,
          name: 'chunk',
          priority: 90
        },
        asyncs: {
          chunks: 'async',
          enforce: true,
          name: 'chunk.async',
          priority: 80
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: hash ? `[name].[${typeof hash === 'string' ? hash : 'contenthash'}:8].css` : '[name].css'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'parsed',
      reportFilename: './bundle_analysis.html'
    }),
    new HtmlWebpackPlugin({
      path: path.resolve(outDir),
      template: path.resolve(srcDir, 'index.html'),
      minify:{
        removeComments: true,
        collapseWhitespace: true
      },
      // filename: hash ? 'index.[hash:8].html' : 'index.html',
      filename: 'index.html',
      hash: !!hash
    })
  ],
  mode: 'production'
});
