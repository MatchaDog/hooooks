/*
 * @Date: 2020-06-03 17:26:21
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-24 10:39:27
 * @FilePath: /hooooks/src/hooks/useIntersection/index.ts
 */

import { MutableRefObject, useRef, useLayoutEffect, useState } from "react";
import "intersection-observer";
import { getTargetObject, targetObjectType } from "../utils";

const useIntersection = <T extends HTMLElement>(
    intersectionOpts?: IntersectionObserverInit | undefined,
    ele?: targetObjectType<T>,
): [boolean, MutableRefObject<T>] => {
    const observedRef = useRef<T>();
    const [changeState, setChangeState] = useState(false);

    useLayoutEffect(() => {
        const target = getTargetObject(observedRef.current ? observedRef : ele);
        if (!target) {
            return () => {};
        }
        const observer = new IntersectionObserver((changes: IntersectionObserverEntry[]) => {
            changes.forEach((change) => {
                if (change.intersectionRatio > 0) {
                    setChangeState(true);
                } else {
                    setChangeState(false);
                }
            });
        }, intersectionOpts);
        observer.observe(target);
        return () => {
            observer && observer.disconnect();
        };
    }, [observedRef, ele]);

    return [changeState, (observedRef as MutableRefObject<T>) || undefined];
};

export default useIntersection;
