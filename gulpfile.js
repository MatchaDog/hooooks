/*
 * @Date: 2020-08-05 11:12:51
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-12 15:39:49
 * @FilePath: /hooooks/gulpfile.js
 */
const { src, dest, series } = require("gulp");
const ts = require("gulp-typescript");
const babel = require("gulp-babel");
const del = require("del");
const sourceFilePath = "src/hooks/**/*.ts";

async function clean() {
    await del("dist/**");
    await del("lib/**");
    await del("es/**");
    await del("@types/**");
}

function commonjs() {
    const tsProject = ts.createProject("tsconfig.json", {
        module: "commonjs",
    });
    return src(sourceFilePath)
        .pipe(tsProject())
        .pipe(
            babel({
                configFile: "./.babelrc",
            }),
        )
        .pipe(dest("lib/"));
}

function es() {
    const tsProject = ts.createProject("tsconfig.json", {
        module: "ESNEXT",
    });
    return (
        src(sourceFilePath)
            .pipe(tsProject())
            .js// .pipe(
            //     babel({
            //         configFile: "./.babelrc",
            //     }),
            // )
            .pipe(dest("es/"))
    );
}

function declare() {
    const tsProject = ts.createProject("tsconfig.json", {
        // 生成相应的*.d.ts文件
        declaration: true,
        // 仅构建*.d.ts文件
        emitDeclarationOnly: true,
    });
    return src(sourceFilePath).pipe(tsProject()).pipe(dest("@types/")).pipe(dest("es/")).pipe(dest("lib/"));
}

exports.default = series(clean, commonjs, es, declare);
