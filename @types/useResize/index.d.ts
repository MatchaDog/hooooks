import { MutableRefObject } from "react";
import { targetObjectType } from "../utils";
declare const useResize: <T extends HTMLElement>(ele?: targetObjectType<T>) => [{
    width: number;
    height: number;
}, MutableRefObject<T> | null];
export default useResize;
