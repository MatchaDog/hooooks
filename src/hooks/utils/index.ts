/*
 * @Date: 2020-06-30 13:55:18
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-13 11:56:50
 * @FilePath: /hooooks/src/hooks/utils/index.ts
 */
import { MutableRefObject } from "react";

type targetObjectType<T> = T | (() => T) | MutableRefObject<T> | undefined;

const getTargetObject = <T extends HTMLElement>(target: targetObjectType<T | undefined>): undefined | null | T => {
    if (!target) return null;
    if (typeof target === "function") {
        return target();
    }
    if (typeof target === "object") {
        return "current" in target ? target.current : target;
    }
};

export { getTargetObject, targetObjectType };
