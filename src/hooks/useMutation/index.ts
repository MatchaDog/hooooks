/*
 * @Date: 2020-06-21 20:23:48
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-22 10:05:39
 * @FilePath: /hooks/src/hooks/useMutation/index.ts
 */
import { MutableRefObject, useRef, useEffect, useState } from "react";

const useMutation = <T extends HTMLElement>({
    ele,
    options,
}: {
    ele?: HTMLElement;
    options?: MutationObserverInit | undefined;
}): [MutationRecord | undefined, MutableRefObject<T>] => {
    const observedRef = useRef<T>();
    const [changeState, setChangeState] = useState<
        MutationRecord | undefined
    >();
    const observer = new MutationObserver((changes: MutationRecord[]) => {
        changes.forEach((change) => {
            setChangeState(change);
        });
    });
    useEffect(() => {
        observedRef &&
            observedRef.current &&
            observer.observe(ele || observedRef.current, options);
        return () => {
            observer && observer.disconnect();
        };
    }, [observedRef, ele]);

    return [changeState, observedRef as MutableRefObject<T>];
};

export default useMutation;
