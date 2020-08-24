/*
 * @Date: 2020-08-21 18:51:40
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-24 10:33:39
 * @FilePath: /hooooks/src/hooks/useEvent/test/index.test.ts
 */
import { renderHook } from "@testing-library/react-hooks";

import useEvent from "..";

describe("useEvent", () => {
    it("test: useEvent should be defined", async () => {
        expect(useEvent).toBeDefined();
    });

    let testDom: HTMLDivElement;

    beforeEach(() => {
        testDom = document.createElement("div");
        document.body.appendChild(testDom);
    });

    afterEach(() => {
        document.body.removeChild(testDom);
    });

    it("test: add event by useEvent", async () => {
        let count = 0;
        const { rerender, unmount } = renderHook((dom: HTMLDivElement) =>
            useEvent(
                "click",
                () => {
                    count++;
                },
                false,
                dom,
            ),
        );
        rerender(testDom);
        expect(count).toEqual(0);
        document.body.click();
        expect(count).toEqual(0);
        testDom.click();
        expect(count).toEqual(1);
        unmount();
        expect(count).toEqual(1);
    });
});
