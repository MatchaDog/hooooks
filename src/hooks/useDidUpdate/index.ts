/*
 * @Date: 2020-05-27 15:53:57
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-21 19:23:02
 * @FilePath: /hooooks/src/hooks/useDidUpdate/index.ts
 */

import { useEffect } from "react";
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
