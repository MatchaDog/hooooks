const webpack = require("webpack");
const path = require("path");
const paths = require("../paths");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const tsImportPluginFactory = require("ts-import-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
// const Manifest = require("../../dll/manifest.json");
const {
    getThisMoment
} = require ("../version/base")

module.exports = {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../../src"),
            "@ant-design/icons/lib/dist$": path.resolve(
                __dirname,
                "../../src/icon/icon.js"
            ),
        },
        extensions: [".tsx", ".ts", ".js", ".json"],
    },
    devtool: "source-map",
    module: {
        noParse: [/moment.js/],
        rules: [
            {
                test: /\.(jsx|tsx|js|ts)$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: "antd",
                                libraryDirectory: "es",
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
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [require("autoprefixer")()],
                        },
                    },
                    {
                        loader: "less-loader",
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name(file) {
                            if (process.env.NODE_ENV === "development") {
                                return "[path][name].[ext]";
                            }

                            return `static/images/[name]_[hash:6].[${getThisMoment()}].[ext]`;
                        },
                        publicPath: "./",
                        outputPath: "/",
                        limit: 8192,
                        // 如果图片文件大于8kb用file-loader，
                        // 把图片正常打包成一个单独的图片文件到设置的目录下，
                        // 若是小于了8kb打包成base64的图片格式插入到bundle.js文件中
                    },
                },
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `static/fonts/[name]_[hash:6].[${getThisMoment()}].[ext]`,
                        outputPath: "/",
                    },
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "../../public/theme"),
                to: "theme",
                ignore: [".*"],
            },
        ]),
        // 压缩css
        new MiniCssExtractPlugin({
            filename: `static/css/[name]_[hash:6].${getThisMoment()}.css`,
            chunkFilename: `static/css/[name]_[hash:6].${getThisMoment()}.css`,
            ignoreOrder: true,
        }),
        new HtmlWebpackPlugin({
            title: "固定资产管理",
            template: paths.appHtml,
            inject: false,
        }),
    ],
};
