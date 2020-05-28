/*
 * @Date: 2020-04-29 17:05:37
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-05-06 11:43:03
 * @FilePath: /FixedAsset/config/version/setTag.js
 */

const { exec } = require("child_process");

const { getCurrentVersion } = require("./base");

exec(`git tag ${getCurrentVersion()}`, (err, stdout, stderr) => {
    if(!err) return;
    console.log(err, "error");
    // console.log(stdout, "stdout");
    // console.log(stderr, "stderr");
});

exec(`git push --tags`, (err, stdout, stderr) => {
    if(!err) return;
    console.log(err, "error");
    // console.log(stdout, "stdout");
    // console.log(stderr, "stderr");
});
