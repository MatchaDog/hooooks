import { MutableRefObject } from "react";
import "intersection-observer";
import { targetObjectType } from "../utils";
declare const useIntersection: <T extends HTMLElement>(ele?: targetObjectType<T>) => [boolean, MutableRefObject<T>];
export default useIntersection;
