import { expect, test } from "vitest";
import { mummyMultiplication } from "./beginner.js";

test("multiplication", () => {
    expect(mummyMultiplication()).toBe(50);
});