import { expect, test, describe } from "vitest";
import { ghoulishNumbers, spookyString } from "./beginner.js";

describe("spookyString(toString) testing", () => {
  test("number to string", () => {
    let x = 123;
    let y = spookyString(x);
    expect(typeof y).toBe("string");
  });

  test("string to string", () => {
    let x = "hello!";
    let y = spookyString(x);
    expect(typeof y).toBe("string");
  });

  test("array of numbers to string", () => {
    let array = [1, 2, 3];
    expect(spookyString(array)).toBe("1,2,3"); 
  });

  test("array of strings to string", () => {
    let array = ["i", "love", "coding"];
    expect(spookyString(array)).toBe("i,love,coding");
  });

});

describe("ghoulishNumbers(parseInt) testing", () => {
    test("positive integer", () => {
        expect(ghoulishNumbers("10")).toBe(10);
    });

    test("negative integer", () => {
        expect(ghoulishNumbers("-10")).toBe(-10);
    });

    test("integer with decimals", () => {
        expect(ghoulishNumbers("10.333")).toBe(10);
    });

    test("negative integer with decimals", () => {
        expect(ghoulishNumbers("10.333")).toBe(10);
    });


    test("multiple numbers", () => {
        expect(ghoulishNumbers("10 -5 0")).toBe(10);
    });

    test("number and word", () => {
        expect(ghoulishNumbers("10 words")).toBe(10);
    });

    test("word then number", () => {
        expect(ghoulishNumbers("wordy 10")).toBe(NaN);
    });
})


