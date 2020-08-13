/*
 * @Date: 2020-06-18 16:44:16
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-12 19:18:59
 * @FilePath: /hooooks/src/hooks/useResize/index.ts
 */

import { MutableRefObject, useRef, useLayoutEffect, useState } from "react";
import { ResizeObserver } from "@juggle/resize-observer";
import { ResizeObserverEntry } from "@juggle/resize-observer";
import { getTargetObject, targetObjectType } from "../utils";

const useResize = <T extends HTMLElement>(
    ele?: targetObjectType<T>,
): [
    {
        width: number;
        height: number;
    },
    MutableRefObject<T> | null,
] => {
    const observedRef = useRef<T>();
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    useLayoutEffect(() => {
        const target = getTargetObject(observedRef.current ? observedRef : ele);
        if (!target) {
            return () => null;
        }
        const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                setSize({
                    width,
                    height,
                });
            }
        });
        observer.observe(target);
        return () => {
            observer && observer.disconnect();
        };
    }, [observedRef, ele]);

    return [size, (observedRef as MutableRefObject<T>) || undefined];
};

export default useResize;
