/*
 * @Date: 2020-06-21 20:23:48
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-07-01 20:32:48
 * @FilePath: /hooks/src/hooks/useMutation/index.ts
 */
import { MutableRefObject, useRef, useLayoutEffect } from "react";
import { getTargetObject, targetObjectType } from "../utils";

const useMutation = <T extends HTMLElement>(
    onObserved: (changes: MutationRecord) => void,
    ele?: targetObjectType<T>,
    options?: MutationObserverInit | undefined,
): MutableRefObject<T> => {
    const observedRef = useRef<T>();
    useLayoutEffect(() => {
        const target = getTargetObject(observedRef.current ? observedRef : ele);
        if (!target) {
            return () => {};
        }
        const observer = new MutationObserver((changes: MutationRecord[]) => {
            changes.forEach((change) => {
                onObserved(change);
            });
        });
        observer.observe(target, options);
        return () => {
            observer && observer.disconnect();
        };
    }, [observedRef, ele]);

    return (observedRef as MutableRefObject<T>) || undefined;
};

export default useMutation;
