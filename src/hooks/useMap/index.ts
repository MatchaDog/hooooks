import { useState, useMemo } from "react";

type actionTypes<K, V> = {
    has: (key: K) => boolean;
    get: (key: K) => V | undefined;
    set: (key: K, value: V) => void;
    setAll: (value: any) => void;
    remove: (key: K) => boolean;
    reset: () => void;
    clear: () => void;
};

const useMap = <K, V>(initialValue: [K, V][]): [Map<K, V>, actionTypes<K, V>] => {
    const initialMap = useMemo<Map<K, V>>(() => (initialValue ? new Map(initialValue) : new Map()), [initialValue]);

    const [map, setMap] = useState(initialMap);

    const actions = useMemo<actionTypes<K, V>>(
        () => ({
            has: (key: K) => map.has(key),
            get: (key: K) => map.get(key),
            set: (key: K, value: V) => setMap(new Map([...Array.from(map), [key, value]])),
            setAll: (value: [K, V][]) => setMap(new Map(value)),
            remove: (key: K) => {
                const flag = map.delete(key);
                setMap(new Map(Array.from(map)));
                return flag;
            },
            reset: () => setMap(new Map(initialMap)),
            clear: () => {
                setMap(new Map());
            },
        }),
        [map, initialMap],
    );

    return [map, actions];
};

export default useMap;
