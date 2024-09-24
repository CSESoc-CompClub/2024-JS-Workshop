import { expect, test } from "vitest";
import { rusticRemainder } from "./beginner.js";

test("remainder", () => {
    expect(rusticRemainder()).toBe(2);
});