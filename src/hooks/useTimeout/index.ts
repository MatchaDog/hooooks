/*
 * @Date: 2020-08-18 15:11:06
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-18 15:54:47
 * @FilePath: /hooooks/src/hooks/useTimeout/index.ts
 */
import { useRef, useCallback } from "react";
import useDidUpdate from "../useDidUpdate";
import useWillUnMount from "../useWillUnMount";
import useDidMount from "../useDidMount";

const useTimeout = (cb: () => void, time = 0): [() => void, () => void] => {
    const cbRef = useRef(cb);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const set = useCallback(() => {
        timerRef.current && clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            cbRef.current?.();
        }, time);
    }, [time]);

    const clear = useCallback(() => {
        timerRef.current && clearTimeout(timerRef.current);
    }, []);

    useDidUpdate(() => {
        cbRef.current = cb;
    }, [cb]);

    useDidMount(() => {
        set();
    });

    useWillUnMount(clear);

    return [set, clear];
};

export default useTimeout;
