/*
 * @Date: 2020-05-27 15:54:43
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-12 16:13:49
 * @FilePath: /hooooks/src/hooks/useWillUnmount/index.ts
 */

import { useEffect, useRef } from "react";

const useWillUnMount: (fn: () => void) => void = (fn) => {
    const cb = useRef(fn);
    useEffect(
        () => () => {
            return cb.current && cb.current();
        },
        [],
    );
};

export default useWillUnMount;
