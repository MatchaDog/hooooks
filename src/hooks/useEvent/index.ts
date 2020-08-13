/*
 * @Date: 2020-08-12 19:53:45
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-13 11:54:37
 * @FilePath: /hooooks/src/hooks/useEvent/index.ts
 */
import { MutableRefObject, useRef, useLayoutEffect } from "react";
import { getTargetObject, targetObjectType } from "../utils";

const useEvent = <T extends HTMLElement, K extends keyof HTMLElementEventMap>(
    name: K,
    cb: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    opts?: boolean | AddEventListenerOptions,
    ele?: targetObjectType<T>,
): MutableRefObject<T> | undefined => {
    const eventRef = useRef<T>();
    useLayoutEffect(() => {
        const target = getTargetObject(eventRef.current ? eventRef : ele);
        if (!target) return () => {};
        if (target.addEventListener) {
            target.addEventListener(name, cb, opts);
        }
        return () => {
            target.removeEventListener(name, cb, opts);
        };
    }, [ele, eventRef]);
    return (eventRef as MutableRefObject<T>) || undefined;
};

export default useEvent;
