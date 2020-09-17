/*
 * @Date: 2020-06-03 17:26:21
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-09-17 19:24:34
 * @FilePath: /hooooks/src/hooks/useIntersection/index.ts
 */

import { MutableRefObject, useRef, useLayoutEffect, useState } from "react";
import "intersection-observer";
import { getTargetObject, targetObjectType } from "../utils";

const useIntersection = <T extends HTMLElement>(
    intersectionOpts?: IntersectionObserverInit | undefined,
    ele?: targetObjectType<T>,
): [IntersectionObserverEntry | null, MutableRefObject<T>] => {
    const observedRef = useRef<T>();
    const [entries, setEntries] = useState<IntersectionObserverEntry | null>(null);

    useLayoutEffect(() => {
        const target = getTargetObject(observedRef.current ? observedRef : ele);
        if (!target) {
            return () => {};
        }
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            setEntries(entries[0]);
        }, intersectionOpts);
        observer.observe(target);
        return () => {
            setEntries(null);
            observer && observer.disconnect();
        };
    }, [observedRef, ele, intersectionOpts]);

    return [entries, (observedRef as MutableRefObject<T>) || undefined];
};

export default useIntersection;
