/*
 * @Date: 2020-08-18 15:11:06
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-10-19 17:38:53
 * @FilePath: /hooooks/src/hooks/useTimeout/index.ts
 */
import { useRef, useCallback, useState } from "react";
import useDidUpdate from "../useDidUpdate";
import useWillUnMount from "../useWillUnMount";
import useDidMount from "../useDidMount";

type actionType = {
    set: () => void;
    clear: () => void;
};

const useTimeout = (cb: () => void, time = 0, opts?: { immediate: boolean }): [boolean | null, actionType] => {
    const cbRef = useRef(cb);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [state, setState] = useState<boolean | null>(false);

    const set = useCallback(() => {
        setState(false);
        timerRef.current && clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setState(true);
            cbRef.current?.();
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

    return [state, { set, clear }];
};

export default useTimeout;
