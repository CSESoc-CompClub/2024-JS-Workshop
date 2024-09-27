import { expect, test } from "vitest";
import { deviousDivision } from "../../beginner.js";

test("division", () => {
    expect(deviousDivision(18, 3)).toBe(6);
});