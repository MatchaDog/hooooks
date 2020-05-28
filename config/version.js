/*
 * @Date: 2020-04-23 16:52:46
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-04-23 17:01:32
 * @FilePath: /okr/config/version.js
 */
const paths = require("./paths");

const moment = require("moment");

const fs = require("fs");

const packageJson = require(paths.appPackage);

const packageVersion = packageJson.version;

const envVersion = process.env.version;

const getThisMoment = () => {
    return moment().format("YYYY-MM-DD HH:mm:ss");
};

const getNewVersion = () => {
    if (!envVersion) return;
    // const currentVersion = packageVersion.replace(/\[\w*\]/g, "");
    const currentVersion = packageVersion;
    const splitVersion = currentVersion.split(".");
    let major = parseInt(splitVersion[0]);
    let minor = parseInt(splitVersion[1]);
    let patch = parseInt(splitVersion[2]);
    if (envVersion === "major") {
        major += 1;
    } else if (envVersion === "minor") {
        minor += 1;
    } else {
        patch += 1;
    }
    return `${major}.${minor}.${patch}`;
};

class InsertVersionPlugin {
    apply(compiler) {
        compiler.hooks.done.tap("InsertVersionPlugin", (
            stats /* 在 hook 被触及时，会将 stats 作为参数传入。 */,
        ) => {
            if (!envVersion) return;
            packageJson.version = getNewVersion();
            fs.writeFile(
                paths.appPackage,
                JSON.stringify(packageJson),
                function (err) {
                    console.log(err);
                },
            );
        });
    }
}

module.exports = {
    getThisMoment,
    getNewVersion,
    InsertVersionPlugin,
};
