import { useRef } from "react";

const useIsFirstMount = (): boolean => {
    const isFirstMount = useRef(true);
    if (isFirstMount.current) {
        isFirstMount.current = false;
        return true;
    }
    return isFirstMount.current;
};

export default useIsFirstMount;
