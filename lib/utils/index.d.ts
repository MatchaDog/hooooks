import { MutableRefObject } from "react";
declare type targetObjectType<T> = T | (() => T) | MutableRefObject<T> | undefined;
declare const getTargetObject: <T extends HTMLElement>(target: targetObjectType<T | undefined>) => T | null | undefined;
export { getTargetObject, targetObjectType };
