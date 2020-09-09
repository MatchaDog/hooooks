import { useState } from "react";

const useBool = (defaultValue?: boolean): [boolean, () => void, () => void, () => void] => {
    const [boolState, setBoolState] = useState(defaultValue || false);
    const setToggle = () => {
        setBoolState(!boolState);
    };
    const setTrue = () => {
        setBoolState(true);
    };
    const setFalse = () => {
        setBoolState(false);
    };
    return [boolState, setToggle, setTrue, setFalse];
};

export default useBool;
