import { MutableRefObject } from "react";
import { targetObjectType } from "../utils";
declare const useClickOutside: <T extends HTMLElement>(onClickOutSide: (e: MouseEvent) => void, ele?: targetObjectType<T>) => MutableRefObject<T>;
export default useClickOutside;
