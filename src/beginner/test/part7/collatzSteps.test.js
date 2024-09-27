import { expect, test } from "vitest";
import { collatzSteps } from "../../7_functions.js";

// How many times do we run the Collatz algorithm until we get to the number 1

test("Steps to get to 1 starting from n = 4", () => {
  expect(collatzSteps(4)).toBe(2);
});

test("Steps to get to 1 starting from n = 5", () => {
  expect(collatzSteps(5)).toBe(5);
});

test("Steps to get to 1 starting from n = 6", () => {
  expect(collatzSteps(6)).toBe(8);
});

test("Steps to get to 1 starting from n = 64", () => {
  expect(collatzSteps(64)).toBe(6);
});

test("Steps to get to 1 starting from n = 1", () => {
  expect(collatzSteps(1)).toBe(3);
});
