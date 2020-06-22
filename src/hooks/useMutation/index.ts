/*
 * @Date: 2020-06-21 20:23:48
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-22 16:43:11
 * @FilePath: /hooks/src/hooks/useMutation/index.ts
 */
import { MutableRefObject, useRef, useState, useLayoutEffect } from "react";

const useMutation = <T extends HTMLElement>(
    options?: MutationObserverInit | undefined,
): [MutationRecord | undefined, MutableRefObject<T>] => {
    const observedRef = useRef<T>();
    const [changeState, setChangeState] = useState<MutationRecord | undefined>();
    useLayoutEffect(() => {
        if (!observedRef.current) {
            return () => {};
        }
        const observer = new MutationObserver((changes: MutationRecord[]) => {
            changes.forEach((change) => {
                setChangeState(change);
            });
        });
        observedRef && observedRef.current && observer.observe(observedRef.current as HTMLElement, options);
        return () => {
            observer && observer.disconnect();
        };
    }, [observedRef]);

    return [changeState, observedRef as MutableRefObject<T>];
};

export default useMutation;
