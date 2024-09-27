import { expect, test } from "vitest";
import { funcB } from "../../7_functions.js";

test("funcB(0)", () => {
  expect(funcB(0)).toBe(0);
});

test("funcB(1)", () => {
  expect(funcB(1)).toBe(0.5);
});

test("funcB(2)", () => {
  expect(funcB(2)).toBe(1);
});

test("funcB(3)", () => {
  expect(funcB(3)).toBe(1.5);
});

test("funcB(100)", () => {
  expect(funcB(100)).toBe(50);
});

test("funcB(-100)", () => {
  expect(funcB(-100)).toBe(-50);
});
