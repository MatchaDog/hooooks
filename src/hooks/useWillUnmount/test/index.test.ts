/*
 * @Date: 2020-09-10 10:35:49
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-09-10 10:36:27
 * @FilePath: /hooooks/src/hooks/useWillUnMount/test/index.test.ts
 */
import { renderHook } from "@testing-library/react-hooks";

import useWillUnMount from "..";

describe("useWillUnMount", () => {
    it("test: useWillUnMount should be defined", async () => {
        expect(useWillUnMount).toBeDefined();
    });

    it("test: useWillUnMount is called when unMount", async () => {
        const cb = jest.fn();
        const { rerender, unmount } = renderHook(() => useWillUnMount(cb));

        expect(cb).toHaveBeenCalledTimes(0);
        rerender();
        expect(cb).toHaveBeenCalledTimes(0);
        unmount();
        expect(cb).toHaveBeenCalledTimes(1);
    });
});
