/*
 * @Date: 2020-09-10 16:17:08
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-09-10 16:18:03
 * @FilePath: /hooooks/src/hooks/useIntersection/test/index.test.ts
 */
import { renderHook, act } from "@testing-library/react-hooks";

import useIntersection from "..";

describe("useIntersection", () => {
    it("test: useIntersection should be defined", async () => {
        expect(useIntersection).toBeDefined();
    });
});
