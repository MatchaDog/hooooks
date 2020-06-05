/*
 * @Date: 2020-06-05 16:46:15
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-05 18:47:50
 * @FilePath: /hooks/webpack.config.js
 */

const path = require("path");
const tsImportPluginFactory = require("ts-import-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/hooks/index.ts",
    output: {
        libraryTarget: "umd",
        globalObject: "this",
        filename: "hooooks.js",
        library: "hooooks",
        path: path.resolve(__dirname, "./build"),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
    },
    optimization: {
        minimizer: [
            // 压缩 js
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    warnings: false,
                },
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(jsx|tsx|js|ts)$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: "hooooks",
                                libraryDirectory: "src",
                                style: true, // to less
                            }),
                        ],
                    }),
                    compilerOptions: {
                        module: "es2015",
                    },
                },
                exclude: /node_modules/,
            },
            // {
            //     test: /\.tsx?$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             presets: [
            //                 "@babel/typescript",
            //                 [
            //                     "@babel/env",
            //                     {
            //                         loose: true,
            //                         modules: false,
            //                     },
            //                 ],
            //                 "@babel/react",
            //             ],
            //             plugins: [
            //                 "babel-plugin-transform-async-to-promises",
            //                 [
            //                     "@babel/plugin-proposal-decorators",
            //                     { legacy: true },
            //                 ],
            //                 [
            //                     "@babel/plugin-proposal-class-properties",
            //                     { loose: true },
            //                 ],
            //                 "@babel/proposal-object-rest-spread",
            //             ],
            //         },
            //     },
            // },
        ],
    },
};
