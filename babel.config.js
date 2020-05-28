'use strict';

module.exports = function (api) {
  api.cache(false);
  const presets = [
    ['@babel/preset-env', { useBuiltIns: 'entry', corejs: 3 }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ];

  const plugins = [
    './node_modules/@umijs/babel-plugin-auto-css-modules'
  ];

  return {
    presets,
    plugins
  };
};
