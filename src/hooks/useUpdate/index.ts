/*
 * @Date: 2020-07-06 17:41:12
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-09-09 18:31:03
 * @FilePath: /hooooks/src/hooks/useUpdate/index.ts
 */

import { useReducer } from "react";

const useUpdate = (): (() => void) => {
    const [, dispatch] = useReducer((num: number) => num + 1, 0);
    return dispatch as () => void;
};

export default useUpdate;
