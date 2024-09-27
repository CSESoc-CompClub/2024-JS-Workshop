import { describe, expect, test } from "vitest";
import { stepsToZero, firstBigger, collatzSteps } from "../../6_loops.js";

describe("stepsToZero", () => {
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
  
});

describe("firstBigger", () => {
  // Starting from some number n, keep increasing by some amount k until we reach
  // or exceed m. The number we end up with is firstBigger(n, m, k). That is,
  // the first number bigger than m.

  test("Starting from 0, first number bigger than 10, increasing by 1", () => {
    expect(firstBigger(0, 10, 1)).toBe(11);
  });

  test("Starting from 0, first number bigger than 10, increasing by 3", () => {
    expect(firstBigger(0, 10, 3)).toBe(12);
  });

  test("Starting from 10, first number bigger than 10, increasing by 10", () => {
    expect(firstBigger(10, 10, 10)).toBe(20);
  });

  test("Starting from 10, first number bigger than 5, increasing by 127", () => {
    expect(firstBigger(10, 5, 127)).toBe(10);
  });

  test("Starting from 13, first number bigger than 23, increasing by 6", () => {
    expect(firstBigger(13, 23, 6)).toBe(25);
  });

  test("Starting from -12, first number bigger than 0, increasing by 5", () => {
    expect(firstBigger(-12, 0, 5)).toBe(3);
  });

  test("Starting from -100, first number bigger than 100, increasing by 9", () => {
    expect(firstBigger(-100, 100, 9)).toBe(107);
  });
});

describe("collatzSteps", () => {
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
    expect(collatzSteps(1)).toBe(0);
  });
});
