import { expect, test } from "vitest";
import { evenCreepierAdditon } from "./beginner.js";

test("remainder", () => {
    expect(evenCreepierAdditon("my fave number is ", 13)).toBe("my fave number is 13");
});