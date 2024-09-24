import { expect, test } from "vitest";
import { creepyAdditon } from "./beginner.js";

test("remainder", () => {
    expect(creepyAdditon()).toBe("halloween!");
});