import { expect, test } from "vitest";
import { rusticRemainder } from "../../beginner.js";

test("remainder", () => {
    expect(rusticRemainder(17, 5)).toBe(2);
});