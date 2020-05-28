/*
 * @Date: 2020-04-29 17:05:14
 * @LastEditors: Hans
 * @description: 
 * @LastEditTime: 2020-04-29 17:12:13
 * @FilePath: /FixedAsset/config/version/base.js
 */

const paths = require("../paths");

const getThisMoment = () => {
    return new Date().getTime();
};

const getCurrentVersion = ()=>{
    return require(paths.appPackage).version;
}

const getNewVersion = () => {
    const envVersion = process.env.version;
    const packageVersion = getCurrentVersion();
    const splitVersion = packageVersion.split(".");
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

// class InsertVersionPlugin {
//     apply(compiler) {
//         compiler.hooks.done.tap("InsertVersionPlugin", (
//             stats /* 在 hook 被触及时，会将 stats 作为参数传入。 */
//         ) => {
//             const envVersion = process.env.version;
//             if (!envVersion) return;
//             const packageJson = require(paths.appPackage);
//             packageJson.version = getNewVersion();
//             fs.writeFile(
//                 paths.appPackage,
//                 JSON.stringify(packageJson, null, 4),
//                 function (err) {
//                     console.log(err);
//                 }
//             );
//         });
//     }
// }

module.exports = {
    getThisMoment,
    getNewVersion,
    getCurrentVersion,
};
