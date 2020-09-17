/*
 * @Date: 2020-06-03 17:26:21
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-09-17 19:22:09
 * @FilePath: /hooooks/src/hooks/useInViewport/index.ts
 */

import { MutableRefObject, useRef, useLayoutEffect, useState } from "react";
import "intersection-observer";
import { getTargetObject, targetObjectType } from "../utils";

const useInViewport = <T extends HTMLElement>(ele?: targetObjectType<T>): [boolean, MutableRefObject<T>] => {
    const observedRef = useRef<T>();
    const [changeState, setChangeState] = useState(false);

    useLayoutEffect(() => {
        const target = getTargetObject(observedRef.current ? observedRef : ele);
        if (!target) {
            return () => {};
        }
        const observer = new IntersectionObserver((changes: IntersectionObserverEntry[]) => {
            changes.forEach((change) => {
                if (change.isIntersecting) {
                    setChangeState(true);
                } else {
                    setChangeState(false);
                }
            });
        });
        observer.observe(target);
        return () => {
            observer && observer.disconnect();
        };
    }, [observedRef, ele]);

    return [changeState, (observedRef as MutableRefObject<T>) || undefined];
};

export default useInViewport;
