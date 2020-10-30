import { useCallback } from "react";

declare global {
    interface Window {
        clipboardData: any;
    }
}

const useClipboard = (): {
    readFromClipboard: () => Promise<string>;
    copy2Clipboard: (content?: string) => Promise<unknown>;
} => {
    const browserSupport = !!navigator.permissions && location.protocol === "https:";

    const readFromClipboard = useCallback(() => {
        return new Promise<string>((resolve, reject) => {
            if (browserSupport) {
                navigator.permissions.query({ name: "clipboard-read" as PermissionName }).then(
                    (res) => {
                        if (res.state === "granted" || res.state === "prompt") {
                            // 允许权限
                            navigator.clipboard
                                .readText()
                                .then((text) => {
                                    resolve(text);
                                })
                                .catch((e) => {
                                    reject(new Error(`读取剪切板失败: ${e}`));
                                });
                        } else {
                            // 弹窗拒绝
                            reject("拒绝授权");
                        }
                    },
                    () => {
                        reject("授权失败");
                    },
                );
            } else {
                reject(new Error("浏览器或网页不支持 navigator.clipboard.readText()"));
            }
        });
    }, [browserSupport]);

    const copy2Clipboard = useCallback(
        (content?: string) => {
            return new Promise((resolve, reject) => {
                const curContent = content || "";
                const copy2ClipboardCb = () => {
                    const dom = document.createElement("input");
                    dom.value = curContent;
                    document.body.appendChild(dom);
                    dom.select();
                    document.execCommand("copy");
                    document.body.removeChild(dom);
                    resolve();
                };
                if (browserSupport) {
                    navigator.permissions.query({ name: "clipboard-write" as PermissionName }).then((res) => {
                        if (res.state === "granted") {
                            navigator.clipboard.writeText(curContent).then(
                                () => {
                                    resolve();
                                },
                                () => {
                                    reject("复制到剪切板失败");
                                },
                            );
                        } else if (res.state === "prompt") {
                            // 申请使用权限中
                            reject("申请使用权限中");
                        } else {
                            // 弹窗拒绝
                            copy2ClipboardCb();
                        }
                    });
                } else {
                    copy2ClipboardCb();
                }
            });
        },
        [browserSupport],
    );
    return { readFromClipboard, copy2Clipboard };
};

export default useClipboard;
