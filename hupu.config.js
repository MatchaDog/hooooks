'use strict';

const path = require('path');
const merge = require('webpack-merge');

module.exports = {
  uuid: 'e5c7c4755047401cb4e72915fe5e55aa',
  dev: {
    webpack: require(path.resolve('configs/webpack.config.dev.js')), // 开发服务端webpack配置 (dev-server webpack configuration)
    proxy:  [
      // {
      //   route: '/api',
      //   config: {
      //     target: 'http://www.api.com/api',
      //     changeOrigin: true
      //   }
      // }
    ], // 开发服务代理配置 (dev-server proxy config)
    port: 6200, // 开发服务端口号 (dev-server port)
    devMiddlewareOptions: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      logLevel: 'error' // 开发服务日志输出等级，可选 'debug'、'info'、'warn'、'error'、'silent' (The log-level which dev-server will apply)
    }
  },

  build: {
    // 构建完成后是否自动发布 (auto release project after build success)
    autoRelease: false,

    // 输入路径 (the build source directory)
    // 务必使用绝对路径 (must be a absolute path)
    srcDir: path.resolve('src'),

    // 输出路径 (the directory for compiled project)
    // 务必使用绝对路径 (must be a absolute path)
    outDir: path.resolve('dist'),

    // 构建的资源是否加上hash，可选 'hash'、'contenthash'、'chunkhash' (whether the hash tag add to building result)
    hash: true,

    // 构建阶段的自定义配置回调 (The callback will be call in the build-process)
    // 返回自定义的配置 (You can return your custom build configuration)
    configuration: config => merge(config, require(path.resolve('configs/webpack.config.prod.js'))),

    reserve: {
      style: false, // 构建结果是否保留样式文件 (whether or not reserve the stylesheet files)
      assets: [] // 构建结果保留其他资源的路径 (reserve other asset paths)
    },

    preflight: {
      typescript: true, // 构建时是否处理ts或tsx文件 (whether or not process the ts or tsx files)
      test: false, // 构建时是否进行单元测试 (whether or not process unit-test)
      eslint: true, // 构建时是否进行eslint检测 (whether or not process eslint checking)
      prettier: true, // 构建时是否进行prettier检测 (whether or not process prettier checking)
      stylelint: true, // 构建时是否进行stylelint检测 (whether or not process stylelint checking)
    }
  },

  release: {
    git: '', // 发布的git仓库地址 (project git repo url)
    preflight: {
      test: false, // 发布前是否进行单元测试 (whether or not process unit-test)
      eslint: true, // 发布前是否进行eslint检测 (whether or not process eslint checking)
      prettier: true, // 发布前是否进行prettier检测 (whether or not process prettier checking)
      stylelint: true, // 发布前是否进行stylelint检测 (whether or not process stylelint checking)
      commitlint: false, // 发布前是否进行commitlint检测 (whether or not process commitlint checking)
      branch: 'master' // 发布前进行分支检测，设置为空字符串则不会检测 (only can release in this branch, set empty string to ignore this check)
    }
  },

  template: {
    tplPkg: '@hupu/tpl-spa', // 新建模板使用的包 (the package for create template)
    // 生成模板的根路径 (the root directory for generate template)
    // 务必使用绝对路径 (must be a absolute path)
    root: path.resolve('src'),
    typescript: true, // 是否创建ts文件 (whether or not generate typescript)
    test: false, // 是否创建单元测试文件 (whether or not generate unit test frame)
    stylesheet: 'css', // 样式文件类型 (stylesheet type)
    readme: [true, 'md'] // [是否生成ReadMe文件, 创建md 或 mdx文件] ([whether or not README.md, generate mdx or md file])
  },

  plugins: []
};
