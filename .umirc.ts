/*
 * @Date: 2020-06-24 13:45:15
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-29 17:37:18
 * @FilePath: /hooks/.umirc.ts
 */

export default {
    extraBabelPlugins: [
        [
            "import",
            {
                libraryName: "antd",
                style: "css",
            },
        ],
    ],
    resolve: {
        includes: ["docs"],
    }
};
