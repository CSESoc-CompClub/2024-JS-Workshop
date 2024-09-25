import { expect, test } from "vitest";
import { monsterRound } from "./beginner.js";

test("monsterRound", () => {
    expect(monsterRound(2.81)).toBe(3);
    expect(monsterRound(2.37)).toBe(2);

    expect(monsterRound(-2.81)).toBe(-3);
    expect(monsterRound(-2.37)).toBe(-2);

    expect(monsterRound(2.5)).toBe(3);
    expect(monsterRound(-2.5)).toBe(-2);

    expect(monsterRound(0)).toBe(0);
    expect(monsterRound(56485764.123)).toBe(56485764);
});