import { expect, test } from "vitest";
import { creepyAdditon } from "../../beginner.js";

test("adding numbers", () => {
    expect(creepyAdditon(1, 2)).toBe(3);
});

test("string concatenation", () => {
    expect(creepyAdditon("hallo", "ween!")).toBe("halloween!");
});

test("both!", () => {
    expect(evenCreepierAdditon("my fave number is ", 13)).toBe("my fave number is 13");
});