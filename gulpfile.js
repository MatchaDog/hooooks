/*
 * @Date: 2020-08-05 11:12:51
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-05 12:48:48
 * @FilePath: /hooooks/gulpfile.js
 */
const { src, dest } = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json",);

function tsCompile() {
    const tsResult = src("./src/hooks/**/*.ts").pipe(tsProject());
    return tsResult.js.pipe(dest("./es/"));
}

exports.default = tsCompile;
