/*
 * @Date: 2020-06-03 17:26:21
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-05 17:07:45
 * @FilePath: /hooks/src/hooks/useIntersection/index.ts
 */

import { MutableRefObject, useRef, useEffect } from "react";

const useIntersection = <T extends HTMLElement>(
    onExposure: (e: IntersectionObserverEntry) => void,
): [MutableRefObject<T>] => {
    const observedRef = useRef<T>();
    const observer = new IntersectionObserver((changes) => {
        changes.forEach((change) => {
            if (change.intersectionRatio > 0) {
                onExposure && onExposure(change);
            }
        });
    });
    useEffect(() => {
        observedRef &&
            observedRef.current &&
            observer.observe(observedRef.current);
        return () => {
            observer && observer.disconnect();
        };
    }, [observedRef]);

    return [observedRef as MutableRefObject<T>];
};

export default useIntersection;
