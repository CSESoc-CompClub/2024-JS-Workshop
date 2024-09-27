import { expect, test } from "vitest";
import { hauntedPhrase } from "../../1_types.js";

test("returns NaN", () => {
    expect(hauntedPhrase()).toBe(NaN);
});