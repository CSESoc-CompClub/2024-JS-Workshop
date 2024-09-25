import { expect, test } from "vitest";
import { vampireRandom } from "./beginner.js";

test("vampireRandom", () => {
    expect(vampireRandom(0)).toBe(0);

    const max = 100;
    const randomValue = vampireRandom(max);
    expect(randomValue).toBeGreaterThanOrEqual(0);
    expect(randomValue).toBeLessThanOrEqual(max);
});