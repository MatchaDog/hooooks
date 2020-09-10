/*
 * @Date: 2020-05-27 15:53:57
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-09-10 10:46:53
 * @FilePath: /hooooks/src/hooks/useDidUpdate/index.ts
 */

import { useEffect } from "react";
import useIsFirstMount from "../useIsFirstMount";

const useDidUpdate: typeof useEffect = (fn, conditions) => {
    const isFirstMount = useIsFirstMount();
    useEffect(() => {
        if (!isFirstMount) {
            return fn && fn();
        }
    }, conditions);
};

export default useDidUpdate;
