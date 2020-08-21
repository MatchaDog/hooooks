/*
 * @Date: 2020-08-21 14:46:00
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-21 18:47:42
 * @FilePath: /hooooks/src/hooks/useClickOutside/test/index.test.tsx
 */
import { renderHook } from "@testing-library/react-hooks";

import useClickOutside from "..";

describe("useClickOutside", () => {
    it("should be defined", async () => {
        expect(useClickOutside).toBeDefined();
    });

    let testDom: HTMLDivElement;
    beforeEach(() => {
        testDom = document.createElement("div");
        document.body.appendChild(testDom);
    });

    afterEach(() => {
        document.body.removeChild(testDom);
    });

    it("test on dom selector", async () => {
        let count = 0;
        const { rerender, unmount } = renderHook((dom: () => HTMLDivElement) =>
            useClickOutside<HTMLDivElement>(() => {
                count = count + 1;
            }, dom),
        );

        rerender(() => testDom);
        testDom.click();
        expect(count).toEqual(0);
        document.body.click();
        expect(count).toEqual(1);
        unmount();
        document.body.click();
        expect(count).toEqual(1);
    });
});
