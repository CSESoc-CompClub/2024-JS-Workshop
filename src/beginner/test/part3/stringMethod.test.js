import { expect, test } from "vitest";
import { witchHunt } from "../../beginner.js";

test("witchHunt", () => {
    expect(witchHunt("There is a witch in the crowd.", "witch")).toBe(true);
    expect(witchHunt("There is a ghost in the crowd.", "witch")).toBe(false);
    expect(witchHunt("There is nothing in the crowd.", "")).toBe(true);
    expect(witchHunt("", "witch")).toBe(false);
});
