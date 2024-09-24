import { expect, test } from "vitest";
import { deviousDivision } from "./beginner.js";

test("division", () => {
    expect(deviousDivision()).toBe(5);
});