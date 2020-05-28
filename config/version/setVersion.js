/*
 * @Date: 2020-04-29 17:05:26
 * @LastEditors: Hans
 * @description: 
 * @LastEditTime: 2020-05-06 14:17:37
 * @FilePath: /FixedAsset/config/version/setVersion.js
 */
const paths = require("../paths");

const fs = require("fs");

const { getNewVersion } = require("./base");

const packageJson = require(paths.appPackage);
packageJson.version = getNewVersion();

fs.writeFile(paths.appPackage, JSON.stringify(packageJson, null, 4), (err) => {
    if (!err) return;
    console.log(err, "error");
});
