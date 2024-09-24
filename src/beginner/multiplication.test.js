import { expect, test } from "vitest";
import { mummyMultiplication } from "./beginner.js";

test("multiplication", () => {
    expect(mummyMultiplication(5, 10)).toBe(50);
});