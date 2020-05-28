/*
 * @Date: 2020-02-28 14:23:31
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-05-28 13:50:51
 * @FilePath: /IT_PC__APP/config/webpack/webpack.config.dev.js
 */
const webpack = require("webpack");
const merge = require("webpack-merge");

const paths = require("../paths");
const commonConfig = require("./webpack.config.common");
const host = process.env.HOST || "0.0.0.0";
const port = 7890;

module.exports = merge.smart(commonConfig, {
    mode: "development",
    // entry: paths.appIndex,
    entry: paths.appIndex,
    output: {
        filename: "static/js/[name]_[hash:8].js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devServer: {
        // 开启前端路径回路映射，子路径映射到根路径，由前端路由框架来解析
        historyApiFallback: true,
        // 关闭 Host 检查，同网段其他设备，可通过内网 IP 访问本机服务（需要配合 host: '0.0.0.0'）使用
        disableHostCheck: true,
        host: host,
        port: port,
        inline: true,
        open: true,
        hot: true,
        // 请求代理服务
        proxy: {
            "/api": {
                target: "https://eim.infox.hupu.io",
                changeOrigin: true,
                pathRewrite: {
                    "/api": "/",
                },
            },
        },
    },
});
