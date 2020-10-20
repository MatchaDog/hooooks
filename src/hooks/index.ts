/*
 * @Date: 2020-05-27 16:16:10
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-10-20 17:17:55
 * @FilePath: /hooooks/src/hooks/index.ts
 */

// lifecycle
import useDidMount from "./useDidMount";
import useDidUpdate from "./useDidUpdate";
import useWillUnMount from "./useWillUnMount";
import useIsFirstMount from "./useIsFirstMount";

// document
import useClickOutside from "./useClickOutside";
import useIntersection from "./useIntersection";
import useInViewport from "./useInViewport";
import useResize from "./useResize";
import useMutation from "./useMutation";
import useEvent from "./useEvent";

// side effect
import useUpdate from "./useUpdate";
import useTimeout from "./useTimeout";
import useInterval from "./useInterval";

// state
import useBool from "./useBoolean";
import useMap from "./useMap";
import useSet from "./useSet";
import useCookie from "./useCookie";

export {
    useDidMount,
    useDidUpdate,
    useWillUnMount,
    useClickOutside,
    useIntersection,
    useInViewport,
    useResize,
    useMutation,
    useUpdate,
    useIsFirstMount,
    useEvent,
    useTimeout,
    useInterval,
    useCookie,
    useBool,
    useMap,
    useSet,
};
