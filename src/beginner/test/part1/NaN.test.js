import { expect, test } from "vitest";
import { hauntedPhrase } from "../../beginner.js";

test("returns NaN", () => {
    expect(hauntedPhrase()).toBe(NaN);
});