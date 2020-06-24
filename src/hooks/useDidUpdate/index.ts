/*
 * @Date: 2020-05-27 15:53:57
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-24 18:55:06
 * @FilePath: /hooks/src/hooks/useDidUpdate/index.ts
 */

import { useRef, useEffect } from "react";

const useDidUpdate = (fn: () => void, conditions?: any[] | undefined) => {
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
