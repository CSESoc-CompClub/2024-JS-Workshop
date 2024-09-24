import { expect, test } from "vitest";
import { evilExponent } from "./beginner.js";

test("remainder", () => {
    expect(evilExponent()).toBe(64);
});