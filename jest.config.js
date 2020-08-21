/*
 * @Date: 2020-08-21 16:03:14
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-21 16:27:26
 * @FilePath: /hooooks/jest.config.js
 */
module.exports = {
    preset: "ts-jest/presets/js-with-ts",
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
};
