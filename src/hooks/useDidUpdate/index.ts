/*
 * @Date: 2020-05-27 15:53:57
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-05-27 15:54:26
 * @FilePath: /IT_PC__APP/src/hooks/useDidUpdate/index.ts
 */

import { useRef, useEffect } from "react";

const useDidUpdate = (fn: any, conditions?: any[]) => {
    const didMountRef = useRef(false);
    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        return fn && fn();
    }, conditions);
};

export default useDidUpdate;
