import { renderHook, act } from "@testing-library/react-hooks";

import useBool from "..";

const setUp = (initialValue?: boolean) => renderHook(() => useBool(initialValue));

describe("useBool", () => {
    it("test: useBool should be defined", async () => {
        expect(useBool).toBeDefined();
    });

    it("test: useBool has a default value", async () => {
        const { result } = setUp();
        expect(result.current[0]).toBeFalsy();
    });

    it("test: useBool could set a default value as true", async () => {
        const { result } = setUp(true);
        expect(result.current[0]).toBeTruthy();
    });

    it("test: useBool could toggle state", async () => {
        const { result } = setUp();
        expect(result.current[0]).toBeFalsy();
        const setToggle = result.current[1];
        expect(typeof setToggle).toBe("function");
        act(() => {
            setToggle();
        });
        expect(result.current[0]).toBeTruthy();
    });

    it("test: useBool could set true value", async () => {
        const { result } = setUp();
        expect(result.current[0]).toBeFalsy();
        const setTrue = result.current[2];
        expect(typeof setTrue).toBe("function");
        act(() => {
            setTrue();
        });
        expect(result.current[0]).toBeTruthy();
    });

    it("test: useBool could set false value", async () => {
        const { result } = setUp(true);
        expect(result.current[0]).toBeTruthy();
        const setFalse = result.current[3];
        expect(typeof setFalse).toBe("function");
        act(() => {
            setFalse();
        });
        expect(result.current[0]).toBeFalsy();
    });
});
