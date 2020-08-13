/*
 * @Date: 2020-05-27 15:52:03
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-12 19:44:05
 * @FilePath: /hooooks/src/hooks/useClickOutside/index.ts
 */

import { MutableRefObject, useRef, useLayoutEffect } from "react";
import { getTargetObject, targetObjectType } from "../utils";

const useClickOutside = <T extends HTMLElement>(
    onClickOutSide: (e: MouseEvent) => void,
    ele?: targetObjectType<T>,
): MutableRefObject<T> => {
    const clickRef = useRef<T>();
    useLayoutEffect(() => {
        const target = getTargetObject(clickRef.current ? clickRef : ele);
        if (!target) return () => {};
        const handleClickOutside = (e: MouseEvent) => {
            const targetElement = e.target as Element;
            if (!target.contains(targetElement)) {
                onClickOutSide(e);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [clickRef, ele]);
    return (clickRef as MutableRefObject<T>) || undefined;
};

export default useClickOutside;
