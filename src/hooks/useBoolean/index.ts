/*
 * @Date: 2020-09-09 17:13:20
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-09-10 10:42:56
 * @FilePath: /hooooks/src/hooks/useBoolean/index.ts
 */
import { useState } from "react";

const useBoolean = (defaultValue?: boolean): [boolean, (flag?: boolean) => void, () => void, () => void] => {
    const [boolState, setBoolState] = useState(defaultValue || false);
    const setToggle = (flag?: boolean) => {
        setBoolState(typeof flag === "boolean" ? flag : !boolState);
    };
    const setTrue = () => {
        setBoolState(true);
    };
    const setFalse = () => {
        setBoolState(false);
    };
    return [boolState, setToggle, setTrue, setFalse];
};

export default useBoolean;
