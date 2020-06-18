/*
 * @Date: 2020-06-18 16:44:16
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-18 17:15:32
 * @FilePath: /hooks/src/hooks/useResize/index.ts
 */

import { MutableRefObject, useRef, useEffect, useState } from "react";
import { ResizeObserver } from "@juggle/resize-observer";
import { ResizeObserverEntry } from "@juggle/resize-observer";

const useResize = <T extends HTMLElement>(
    ele: HTMLElement,
): [
    {
        width: number;
        height: number;
    },
    MutableRefObject<T>,
] => {
    const observedRef = useRef<T>();
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
            const { width, height } = entry.contentRect;
            setSize({
                width,
                height,
            });
        }
    });
    useEffect(() => {
        observedRef && observedRef.current
            ? observer.observe(observedRef.current)
            : observer.observe(ele);
        return () => {
            observer && observer.disconnect();
        };
    }, [observedRef]);

    return [size, observedRef as MutableRefObject<T>];
};

export default useResize;
