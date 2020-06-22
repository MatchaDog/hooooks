/*
 * @Date: 2020-06-03 17:26:21
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-22 16:50:38
 * @FilePath: /hooks/src/hooks/useIntersection/index.ts
 */

import { MutableRefObject, useRef, useLayoutEffect, useState } from "react";
import "intersection-observer";

const useIntersection = <T extends HTMLElement>(): [
    boolean,
    MutableRefObject<T>,
] => {
    const observedRef = useRef<T>();
    const [changeState, setChangeState] = useState(false);

    useLayoutEffect(() => {
        if (!observedRef.current) {
            return () => {};
        }
        const observer = new IntersectionObserver(
            (changes: IntersectionObserverEntry[]) => {
                changes.forEach((change) => {
                    if (change.intersectionRatio > 0) {
                        setChangeState(true);
                    } else {
                        setChangeState(false);
                    }
                });
            },
        );
        observedRef &&
            observedRef.current &&
            observer.observe(observedRef.current);
        return () => {
            observer && observer.disconnect();
        };
    }, [observedRef]);

    return [changeState, observedRef as MutableRefObject<T>];
};

export default useIntersection;
