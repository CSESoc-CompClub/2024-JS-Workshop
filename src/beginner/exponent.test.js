import { expect, test } from "vitest";
import { evilExponent } from "./beginner.js";

test("remainder", () => {
    expect(evilExponent(2, 3)).toBe(8);
});