/*
 * @Date: 2020-09-10 10:35:49
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-09-10 16:37:20
 * @FilePath: /hooooks/src/hooks/useUpdate/test/index.test.ts
 */
import { renderHook, act } from "@testing-library/react-hooks";

import useUpdate from "..";

describe("useUpdate", () => {
    it("test: useUpdate should be defined", async () => {
        expect(useUpdate).toBeDefined();
    });

    it("test: state updates when useUpdate calls", async () => {
        let count = 0;
        const { result } = renderHook(() => {
            count++;
            return useUpdate();
        });
        act(() => {
            result.current();
        });
        expect(count).toEqual(2);
        act(() => {
            result.current();
        });
        expect(count).toEqual(3);
    });
});
