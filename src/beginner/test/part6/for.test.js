import { describe, expect, test } from "vitest";
import { sumN, sumNM, skipSum } from "../../6_loops.js";


describe("sumN", () => {
  // Sum the integers from 1 to n
  test("Sums the first 5 integers", () => {
    expect(sumN(5)).toBe(15);
  });
    
  test("Sums the first 100 integers", () => {
    expect(sumN(100)).toBe(5050);
  });
  
  test("Sums no integers!", () => {
    expect(sumN(0)).toBe(0);
  });
});

describe("sumNM", () => {
  // sum the numbers from n to m

  test("Sums the first 5 integers", () => {
    expect(sumNM(1, 5)).toBe(15);
  });

  test("Sums the first 100 integers", () => {
    expect(sumNM(1, 100)).toBe(5050);
  });

  test("Sums no integers!", () => {
    expect(sumNM(0, 0)).toBe(0);
  });

  test("Sums the integers from 2 to 10", () => {
    expect(sumNM(2, 10)).toBe(54);
  });

  test("Sums the integers from 50 to 100", () => {
    expect(sumNM(50, 100)).toBe(3825);
  });

  test("Sums the integers from -10 to 15", () => {
    expect(sumNM(-10, 15));
  });
});

describe("skipSum", () => {
  test("Sums the first 5 integers", () => {
    expect(skipSum(1, 5, 1)).toBe(15);
  });
  
  test("Sums the first 100 integers", () => {
    expect(skipSum(1, 100, 1)).toBe(5050);
  });
  
  test("Sums no integers!", () => {
    expect(skipSum(0, 0, 1)).toBe(0);
  });
  
  test("Sums the integers from 2 to 10", () => {
    expect(skipSum(2, 10, 1)).toBe(54);
  });
  
  test("Sums the integers from 50 to 100", () => {
    expect(skipSum(50, 100, 1)).toBe(3825);
  });
  
  test("Sums the integers from -10 to 15", () => {
    expect(skipSum(-10, 15, 1));
  });
  
  test("Sums the even integers from 2 to 100", () => {
    expect(skipSum(2, 100, 2)).toBe(2550);
  });
  
  test("Sums 3 to 108, skipping 5 each time", () => {
    expect(skipSum(3, 108, 5)).toBe(1221);
  });
  
  test("Sums -25 to 25, skipping 5 each time", () => {
    expect(skipSum(-25, 25, 5)).toBe(0);
  });
  
  test("Sums -25 to 30, skipping 5 each time", () => {
    expect(skipSum(-25, 30, 5)).toBe(30);
  });
});
