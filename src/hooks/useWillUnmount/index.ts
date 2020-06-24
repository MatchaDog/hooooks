/*
 * @Date: 2020-05-27 15:54:43
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-24 11:29:34
 * @FilePath: /hooks/src/hooks/useWillUnmount/index.ts
 */

import { useEffect } from "react";

const useWillUnmount = (fn: () => void) => {
    useEffect(
        () => () => {
            return fn && fn();
        },
        [],
    );
};

export default useWillUnmount;
