import { expect, test } from "vitest";
import { spookyScream } from "../../beginner.js";

test("spookyUppercase", () => {
    expect(spookyScream("halloween")).toBe("HALLOWEEN");
    expect(spookyScream("SCARY")).toBe("SCARY");
    expect(spookyScream("SpOoKy")).toBe("SPOOKY");
    expect(spookyScream("")).toBe("");
});