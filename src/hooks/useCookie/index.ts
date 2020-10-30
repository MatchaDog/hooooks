/*
 * @Date: 2020-10-19 16:53:00
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-10-19 17:31:12
 * @FilePath: /hooooks/src/hooks/useCookie/index.ts
 */
import { useState, useCallback } from "react";
import Cookie from "js-cookie";

type actionType = {
    updateCookie?: (value: string) => void;
    deleteCookie?: () => void;
};

const useCookie = (cookieName: string): [string | null, actionType] => {
    const [cookie, setCookie] = useState<string | null>(() => Cookie.get(cookieName) || null);

    const updateCookie = useCallback(
        (value: string) => {
            Cookie.set(cookieName, value);
            setCookie(value);
        },
        [cookieName],
    );

    const deleteCookie = useCallback(() => {
        Cookie.remove(cookieName);
        setCookie(null);
    }, [cookieName]);

    return [cookie, { updateCookie, deleteCookie }];
};

export default useCookie;
