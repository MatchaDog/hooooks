import { MutableRefObject } from "react";
import { targetObjectType } from "../utils";
declare const useMutation: <T extends HTMLElement>(onObserved: (changes: MutationRecord) => void, ele?: targetObjectType<T>, options?: MutationObserverInit | undefined) => MutableRefObject<T>;
export default useMutation;
