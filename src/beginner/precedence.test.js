import { expect, test } from "vitest";
import { potionOfPrecedence } from "./beginner.js";

test("remainder", () => {
    expect(potionOfPrecedence()).toBe(350);
});