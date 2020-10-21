/*
 * @Date: 2020-09-09 17:13:20
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-10-19 17:29:50
 * @FilePath: /hooooks/src/hooks/useBoolean/index.ts
 */
import { useState } from "react";

type actionType = {
    toggle: (flag?: boolean) => void;
    setTrue: () => void;
    setFalse: () => void;
};

const useBoolean = (defaultValue?: boolean): [boolean, actionType] => {
    const [boolState, setBoolState] = useState(defaultValue || false);

    const toggle = (flag?: boolean) => setBoolState(typeof flag === "boolean" ? flag : !boolState);

    const setTrue = () => setBoolState(true);

    const setFalse = () => setBoolState(false);

    return [boolState, { toggle, setTrue, setFalse }];
};

export default useBoolean;
