/*
 * @Date: 2020-05-27 15:53:57
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-12 16:59:58
 * @FilePath: /hooooks/src/hooks/useDidUpdate/index.ts
 */

import { useRef, useEffect } from "react";
import useIsFirstMount from "../useIsFirstMount";

const useDidUpdate: (fn: () => void, conditions?: any[] | undefined) => void = (fn, conditions) => {
    const isFirstMount = useIsFirstMount();
    useEffect(() => {
        if (!isFirstMount) {
            return fn && fn();
        }
    }, conditions);
};

export default useDidUpdate;
