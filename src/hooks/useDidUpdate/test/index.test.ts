/*
 * @Date: 2020-08-21 18:51:40
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-21 19:24:21
 * @FilePath: /hooooks/src/hooks/useDidUpdate/test/index.test.ts
 */
import { renderHook } from "@testing-library/react-hooks";

import useDidUpdate from "..";

describe("useDidUpdate", () => {
    it("should be defined", async () => {
        expect(useDidUpdate).toBeDefined();
    });

    it("test: useDidUpdate is called except first time", async () => {
        let count = 0;
        const { rerender, unmount } = renderHook(() => {
            useDidUpdate(() => {
                count = count + 1;
            });
        });
        expect(count).toEqual(0);
        rerender();
        expect(count).toEqual(1);
        unmount();
        expect(count).toEqual(1);
    });

    it("test: useDidUpdate is called by dependencies", async () => {
        let count = 0;
        let depsCount = 0;
        const { rerender, unmount } = renderHook(() => {
            useDidUpdate(() => {
                count = count + 1;
            }, [depsCount]);
        });
        expect(count).toEqual(0);
        depsCount = depsCount + 1;
        rerender();
        expect(count).toEqual(1);
        unmount();
        expect(count).toEqual(1);
    });
});
