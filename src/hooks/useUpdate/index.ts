/*
 * @Date: 2020-07-06 17:41:12
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-07-06 17:42:16
 * @FilePath: /hooks/src/hooks/useUpdate/index.ts
 */

import { useReducer } from "react";

const useUpdate = () => {
    const [, dispatch] = useReducer((num: number) => num + 1, 0);
    return dispatch as () => void;
};

export default useUpdate;
