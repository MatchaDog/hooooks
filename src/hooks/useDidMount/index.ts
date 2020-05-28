/*
 * @Date: 2020-05-27 15:53:00
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-05-27 15:53:37
 * @FilePath: /IT_PC__APP/src/hooks/useDidMount/index.ts
 */

import { useEffect } from "react";

const useDidMount = (fn: () => void) => {
    useEffect(() => {
        fn && fn();
    }, []);
};

export default useDidMount;
