import { useRef, useEffect, useCallback } from "react";

const useMountedState = (): (() => boolean) => {
    const state = useRef(false);

    const getState = useCallback(() => state.current, []);

    useEffect(() => {
        state.current = true;
        return () => {
            state.current = false;
        };
    }, []);

    return getState;
};

export default useMountedState;
