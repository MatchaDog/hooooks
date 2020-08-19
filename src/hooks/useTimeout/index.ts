/*
 * @Date: 2020-08-18 15:11:06
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-19 11:02:49
 * @FilePath: /hooooks/src/hooks/useTimeout/index.ts
 */
import { useRef, useCallback, useState } from "react";
import useDidUpdate from "../useDidUpdate";
import useWillUnMount from "../useWillUnMount";
import useDidMount from "../useDidMount";

const useTimeout = (
    cb: () => void,
    time = 0,
    opts: { immediate: boolean },
): [boolean | null, () => void, () => void] => {
    const cbRef = useRef(cb);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [state, setState] = useState<boolean | null>(false);

    const set = useCallback(() => {
        timerRef.current && clearTimeout(timerRef.current);
        setState(true);
        timerRef.current = setTimeout(() => {
            cbRef.current?.();
            setState(false);
        }, time);
    }, [time]);

    const clear = useCallback(() => {
        timerRef.current && clearTimeout(timerRef.current);
        setState(null);
    }, []);

    useDidUpdate(() => {
        cbRef.current = cb;
    }, [cb]);

    useDidMount(() => {
        if (opts && opts.immediate) {
            set();
        }
    });

    useWillUnMount(clear);

    return [state, set, clear];
};

export default useTimeout;