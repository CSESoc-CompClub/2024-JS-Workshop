import { expect, test, describe } from "vitest";
import { spellbindingAnd } from "./beginner.js";

describe("testing logical and", () => {
    test("both false", () => {
        expect(spellbindingAnd(false, false)).toBe(false);
    });

    test("one true one false", () => {
        expect(spellbindingAnd(true, false)).toBe(false);
    });

    test("both true", () => {
        expect(spellbindingAnd(true, true)).toBe(true);
    });
});