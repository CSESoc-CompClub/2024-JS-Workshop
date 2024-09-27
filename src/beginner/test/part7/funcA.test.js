import { expect, test } from "vitest";
import { funcA } from "../../7_functions.js";

test("funcA(0)", () => {
  expect(funcA(0)).toBe(1);
});

test("funcA(1)", () => {
  expect(funcA(1)).toBe(4);
});

test("funcA(2)", () => {
  expect(funcA(2)).toBe(7);
});

test("funcA(3)", () => {
  expect(funcA(3)).toBe(10);
});

test("funcA(100)", () => {
  expect(funcA(100)).toBe(301);
});

test("funcA(-100)", () => {
  expect(funcA(-100)).toBe(-299);
});
