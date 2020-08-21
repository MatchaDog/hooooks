/*
 * @Date: 2020-08-21 18:51:40
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-21 19:14:50
 * @FilePath: /hooooks/src/hooks/useDidMount/test/index.test.ts
 */
import { renderHook } from "@testing-library/react-hooks";

import useDidMount from "..";

describe("useDidMount", () => {
    it("test: useDidMount should be defined", async () => {
        expect(useDidMount).toBeDefined();
    });

    it("test: useDidMount is called only once", async () => {
        const cb = jest.fn();
        const { rerender, unmount } = renderHook(() => useDidMount(cb));

        expect(cb).toHaveBeenCalledTimes(1);
        rerender();
        expect(cb).toHaveBeenCalledTimes(1);
        unmount();
        expect(cb).toHaveBeenCalledTimes(1);
    });
});
