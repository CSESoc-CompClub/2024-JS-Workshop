import { expect, test } from "vitest";
import { spookyUppercase } from "./beginner.js";

test("spookyUppercase", () => {
    expect(spookyUppercase("halloween")).toBe("HALLOWEEN");
    expect(spookyUppercase("SCARY")).toBe("SCARY");
    expect(spookyUppercase("SpOoKy")).toBe("SPOOKY");
    expect(spookyUppercase("")).toBe("");
});