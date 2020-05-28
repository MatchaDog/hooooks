/*
 * @Date: 2020-05-27 15:52:03
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-05-27 15:58:22
 * @FilePath: /IT_PC__APP/src/hooks/useClickOutside/index.ts
 */

import { MutableRefObject, useRef, useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(
    onClickOutSide: (e: MouseEvent) => void,
): MutableRefObject<T> => {
    const clickRef = useRef<T>();
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const targetElement = e.target as Element;
            if (clickRef.current && !clickRef.current.contains(targetElement)) {
                onClickOutSide(e);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [clickRef]);
    return clickRef as MutableRefObject<T>;
};

export default useClickOutside;
