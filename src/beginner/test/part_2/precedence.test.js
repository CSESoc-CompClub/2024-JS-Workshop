import { expect, test } from "vitest";
import { potionOfPrecedence } from "../../beginner.js";

test("precedence", () => {
    expect(potionOfPrecedence()).toBe(350);
});