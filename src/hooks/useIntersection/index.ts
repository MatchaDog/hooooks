/*
 * @Date: 2020-06-03 17:26:21
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-07-01 20:25:58
 * @FilePath: /hooks/src/hooks/useIntersection/index.ts
 */

import { MutableRefObject, useRef, useLayoutEffect, useState } from "react";
import "intersection-observer";
import { getTargetObject, targetObjectType } from "../utils";

const useIntersection = <T extends HTMLElement>(
    ele?: targetObjectType<T>,
): [boolean, MutableRefObject<T>] => {
    const observedRef = useRef<T>();
    const [changeState, setChangeState] = useState(false);

    useLayoutEffect(() => {
        const target = getTargetObject(observedRef.current ? observedRef : ele);
        if (!target) {
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
        observer.observe(target);
        return () => {
            observer && observer.disconnect();
        };
    }, [observedRef, ele]);

    return [changeState, (observedRef as MutableRefObject<T>) || undefined];
};

export default useIntersection;
