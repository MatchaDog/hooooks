/*
 * @Date: 2020-05-27 15:57:57
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-05-27 17:24:41
 * @FilePath: /IT_PC__APP/src/hooks/useScroll/index.ts
 */
import { useRef, MutableRefObject } from "react";
import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";

const useScroll = <T extends HTMLElement>(params: {
    [index: string]: any;
}): {
    scrollWrapRef: MutableRefObject<T>;
    onInit: () => void;
} => {
    if (params && params.mouseWheel) {
        BScroll.use(MouseWheel);
    }
    if (params && params.scrollbar) {
        BScroll.use(ScrollBar);
    }
    const scrollWrapRef = useRef<T>();
    const handleInit = () => {
        return new BScroll(scrollWrapRef.current, params);
    };
    return {
        scrollWrapRef: scrollWrapRef as MutableRefObject<T>,
        onInit: handleInit,
    };
};

export default useScroll;
