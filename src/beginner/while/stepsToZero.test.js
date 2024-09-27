import { expect, test } from "vitest";
import { stepsToZero } from "./stepsToZero.js";

// Starting from n, keep decreasing by k until we reach or are lower than 0.
// The number of steps we take is stepsToZero(n, k)

test("Starting from 20, decrease by 5 until less than or equal to 0", () => {
  expect(stepsToZero(20, 5)).toBe(4);
});

test("Starting from 20, decrease by 6 until less than or equal to 0", () => {
  expect(stepsToZero(20, 6)).toBe(4);
});

test("Starting from 20, decrease by 4 until less than or equal to 0", () => {
  expect(stepsToZero(20, 4)).toBe(5);
});

test("Starting from 20, decrease by 3 until less than or equal to 0", () => {
  expect(stepsToZero(20, 3)).toBe(7);
});

test("Starting from 0, decrease by 3 until less than or equal to 0", () => {
  expect(stepsToZero(0, 3)).toBe(0);
});

test("Starting from 100, decrease by 1 until less than or equal to 0", () => {
  expect(stepsToZero(100, 1)).toBe(100);
});

test("Starting from 100, decrease by 2 until less than or equal to 0", () => {
  expect(stepsToZero(100, 2)).toBe(50);
});

test("Starting from -20, decrease by 5 until less than or equal to 0", () => {
  expect(stepsToZero(-20, 5)).toBe(0);
});

test("Starting from -1, decrease by 1 until less than or equal to 0", () => {
  expect(stepsToZero(-1, 1)).toBe(0);
});
