import { expect, test } from "vitest";
import { fibonacci } from "../../7_functions.js";

test("fibonacci(1)", () => {
  expect(fibonacci(1)).toBe(1);
});

test("fibonacci(2)", () => {
  expect(fibonacci(2)).toBe(1);
});

test("fibonacci(3)", () => {
  expect(fibonacci(3)).toBe(2);
});

test("fibonacci(4)", () => {
  expect(fibonacci(4)).toBe(3);
});

test("fibonacci(5)", () => {
  expect(fibonacci(5)).toBe(5);
});

test("fibonacci(6)", () => {
  expect(fibonacci(6)).toBe(8);
});

test("fibonacci(7)", () => {
  expect(fibonacci(7)).toBe(13);
});

test("fibonacci(20)", () => {
  expect(fibonacci(20)).toBe(6765);
});
