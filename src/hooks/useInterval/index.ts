/*
 * @Date: 2020-08-18 15:11:06
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-19 11:17:21
 * @FilePath: /hooooks/src/hooks/useInterval/index.ts
 */
import { useRef, useCallback, useState } from "react";
import useDidUpdate from "../useDidUpdate";
import useWillUnMount from "../useWillUnMount";
import useDidMount from "../useDidMount";

const useInterval = (
    cb: () => void,
    time = 0,
    opts?: { immediate: boolean },
): [boolean | null, () => void, () => void] => {
    const cbRef = useRef(cb);
    const timerRef = useRef<ReturnType<typeof setInterval>>();
    const [state, setState] = useState<boolean | null>(false);

    const set = useCallback(() => {
        if (!time || time === 0) {
            return undefined;
        }
        timerRef.current && clearTimeout(timerRef.current);
        setState(true);
        timerRef.current = setInterval(() => {
            cbRef.current?.();
            setState(false);
        }, time);
    }, [time]);

    const clear = useCallback(() => {
        timerRef.current && clearInterval(timerRef.current);
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

export default useInterval;
