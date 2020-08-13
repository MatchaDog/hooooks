/*
 * @Date: 2020-05-27 15:53:44
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-12 16:13:56
 * @FilePath: /hooooks/src/hooks/useDidMount/index.ts
 */

import { useEffect } from "react";

const useDidMount: (fn: () => void) => void = (fn) => {
    useEffect(() => {
        fn && fn();
    }, []);
};

export default useDidMount;
