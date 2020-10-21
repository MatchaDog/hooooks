/*
 * @Date: 2020-09-09 17:13:29
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-09-10 10:38:44
 * @FilePath: /hooooks/src/hooks/useBoolean/test/index.test.ts
 */
import { renderHook, act } from "@testing-library/react-hooks";

import useBoolean from "..";

const setUp = (initialValue?: boolean) => renderHook(() => useBoolean(initialValue));

describe("useBoolean", () => {
    it("test: useBoolean should be defined", async () => {
        expect(useBoolean).toBeDefined();
    });

    it("test: useBoolean has a default value", async () => {
        const { result } = setUp();
        expect(result.current[0]).toBeFalsy();
    });

    it("test: useBoolean could set a default value as true", async () => {
        const { result } = setUp(true);
        expect(result.current[0]).toBeTruthy();
    });

    it("test: useBoolean could toggle state", async () => {
        const { result } = setUp();
        expect(result.current[0]).toBeFalsy();
        const toggle = result.current[1].toggle;
        expect(typeof toggle).toBe("function");
        act(() => {
            toggle();
        });
        expect(result.current[0]).toBeTruthy();
        act(() => {
            toggle(false);
        });
        expect(result.current[0]).toBeFalsy();
        act(() => {
            toggle(true);
        });
        expect(result.current[0]).toBeTruthy();
    });

    it("test: useBoolean could set true value", async () => {
        const { result } = setUp();
        expect(result.current[0]).toBeFalsy();
        const setTrue = result.current[1].setTrue;
        expect(typeof setTrue).toBe("function");
        act(() => {
            setTrue();
        });
        expect(result.current[0]).toBeTruthy();
    });

    it("test: useBoolean could set false value", async () => {
        const { result } = setUp(true);
        expect(result.current[0]).toBeTruthy();
        const setFalse = result.current[1].setFalse;
        expect(typeof setFalse).toBe("function");
        act(() => {
            setFalse();
        });
        expect(result.current[0]).toBeFalsy();
    });
});
