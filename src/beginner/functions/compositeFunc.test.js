import { expect, test } from "vitest";
import { compositeFunc } from "./collatzPt2.js";

test("compositeFunc(0)", () => {
  expect(compositeFunc(0)).toBe(0);
});

test("compositeFunc(1)", () => {
  expect(compositeFunc(1)).toBe(4);
});

test("compositeFunc(2)", () => {
  expect(compositeFunc(2)).toBe(1);
});

test("compositeFunc(3)", () => {
  expect(compositeFunc(3)).toBe(10);
});

test("compositeFunc(100)", () => {
  expect(compositeFunc(100)).toBe(50);
});

test("compositeFunc(-100)", () => {
  expect(compositeFunc(-100)).toBe(-50);
});

test("compositeFunc(101)", () => {
  expect(compositeFunc(101)).toBe(304);
});

test("compositeFunc(-101)", () => {
  expect(compositeFunc(-101)).toBe(-302);
});
