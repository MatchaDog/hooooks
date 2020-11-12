import { MutableRefObject, useRef, useLayoutEffect, useCallback, useState } from "react";
import { getTargetObject, targetObjectType } from "../utils";

const useHover = <T extends HTMLElement>(ele?: targetObjectType<T>): [boolean, MutableRefObject<T>] => {
    const hoverRef = useRef<T>();
    const [hoverState, setHoverState] = useState(false);

    const enterCallback = useCallback(() => {
        setHoverState(true);
    }, []);

    const moveCallback = useCallback(() => {
        setHoverState(false);
    }, []);

    useLayoutEffect(() => {
        const target = getTargetObject(hoverRef.current ? hoverRef : ele);
        if (!target) {
            return () => {};
        }
        target.addEventListener("mouseenter", enterCallback);
        target.addEventListener("mouseleave", moveCallback);
        return () => {
            target.addEventListener("mouseenter", enterCallback);
            target.addEventListener("mouseleave", moveCallback);
        };
    }, [ele, hoverRef, enterCallback, moveCallback]);

    return [hoverState, (hoverRef as MutableRefObject<T>) || undefined];
};

export default useHover;
