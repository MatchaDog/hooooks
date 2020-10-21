/**
 * @Author: ,: Hans
 * @Date: ,: 2020-10-20 16:44:10
 * @LastEditTime: ,: 2020-10-21 17:16:47
 * @LastEditors: ,: Do not edit
 * @FilePath: ,: /hooooks/src/hooks/useSet/index.ts
 * @Description: ,:
 */
import { useState, useMemo } from "react";

type actionType<T> = {
    add: (value: T) => void;
    remove: (value: T) => void;
    has: (value: T) => boolean;
    reset: () => void;
};

const useSet = <T>(initialValue?: Array<T>): [Set<T>, actionType<T>] => {
    const initialSet = useMemo<Set<T>>(() => (initialValue ? new Set(initialValue) : new Set()), [initialValue]);

    const [set, setSet] = useState(initialSet);

    const actions = useMemo<actionType<T>>(
        () => ({
            // add and set did not work
            add: (value: T) => setSet(new Set([...Array.from(set), value])),
            remove: (value: T) => setSet(new Set([...Array.from(set).filter((i) => i !== value)])),
            has: (value: T) => set.has(value),
            reset: () => setSet(initialSet),
        }),
        [set, initialSet, setSet],
    );

    return [set, actions];
};

export default useSet;
