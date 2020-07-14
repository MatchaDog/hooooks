/*
 * @Date: 2020-05-27 15:53:44
 * @LastEditors: Hans
 * @description: 
 * @LastEditTime: 2020-06-24 18:57:19
 * @FilePath: /hooks/src/hooks/useDidMount/index.ts
 */ 
import { useEffect } from "react";

const useDidMount = (fn: () => void) => {
    useEffect(() => {
        fn && fn();
    }, []);
};

export default useDidMount;
