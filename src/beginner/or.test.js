import { expect, test } from "vitest";
import { ghostlyOr } from "./beginner.js";

test("remainder", () => {
    expect(ghostlyOr()).toBe(true);
});