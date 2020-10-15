/*
 * @Date: 2020-05-27 15:52:03
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-10-09 15:22:23
 * @FilePath: /hooooks/src/hooks/useClickOutside/index.ts
 */

import { MutableRefObject, useRef, useLayoutEffect, useCallback } from "react";
import { getTargetObject, targetObjectType } from "../utils";

const useClickOutside = <T extends HTMLElement>(
    onClickOutSide: (e: MouseEvent) => void,
    ele?: targetObjectType<T>,
): MutableRefObject<T> => {
    const clickRef = useRef<T>();
    const handleClickOutside = useCallback(
        (e: MouseEvent) => {
            const target = getTargetObject(clickRef.current ? clickRef : ele);
            if (!target) return () => {};
            const targetElement = e.target as Element;
            if (!target.contains(targetElement)) {
                onClickOutSide(e);
            }
        },
        [ele, onClickOutSide],
    );
    useLayoutEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [clickRef, ele, handleClickOutside]);
    return (clickRef as MutableRefObject<T>) || undefined;
};

export default useClickOutside;
