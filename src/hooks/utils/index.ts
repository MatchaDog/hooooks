import { MutableRefObject } from "react";

/*
 * @Date: 2020-06-30 13:55:18
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-07-01 17:42:56
 * @FilePath: /hooks/src/hooks/utils/index.ts
 */
type targetObjectType<T> = T | (() => T) | MutableRefObject<T> | undefined;

const getTargetObject = <T extends HTMLElement>(
    target: targetObjectType<T | undefined>,
) => {
    if (!target) return null;
    if (typeof target === "function") {
        return target();
    }
    if (typeof target === "object") {
        return "current" in target ? target.current : target;
    }
};

export { getTargetObject, targetObjectType };
