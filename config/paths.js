/*
 * @Date: 2020-03-03 16:51:44
 * @LastEditors: Hans
 * @description: 
 * @LastEditTime: 2020-04-23 16:53:17
 * @FilePath: /okr/config/paths.js
 */
const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  appRoot: resolveApp('./'),
  appBuild: resolveApp('fixed_asset_build__pc'),
  appPublic: resolveApp('public'),
  appIndex: resolveApp('src/index.tsx'),
  appHtml: resolveApp('public/index.html'),
  appPackage: resolveApp('package.json'),
}