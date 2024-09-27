import { expect, test, describe, beforeEach, vi } from "vitest";
import { BloodBank } from "../bloodBank.js";

describe('BloodBank Class', () => {
  let bloodBank;

  beforeEach(() => {
    bloodBank = new BloodBank();
  });

  test('Add valid blood bag to the blood bank', () => {
    bloodBank.addBag('A+', 500);
    expect(bloodBank.bloodBank.length).toBe(1);
    expect(bloodBank.bloodBank[0]).toEqual({ bloodType: 'A+', amount: 500 });
  });

  test("Don't add invalid blood bag to the blood bank", () => {
    bloodBank.addBag('C+', 500);
    expect(bloodBank.bloodBank.length).toBe(0);
  });

  test('Print theq log', () => {
    bloodBank.addBag('A+', 500);
    bloodBank.addBag('O-', 300);

    const consoleSpy = vi.spyOn(console, 'log');
    bloodBank.printLog();
    expect(consoleSpy).toHaveBeenCalledWith('Blood Bank Log:');
    expect(consoleSpy).toHaveBeenCalledWith('Bag 1: 500 ml of A+');
    expect(consoleSpy).toHaveBeenCalledWith('Bag 2: 300 ml of O-');
    consoleSpy.mockRestore();
  });

  test('Return true if enough positive blood', () => {
    bloodBank.addBag('A+', 600);
    bloodBank.addBag('O+', 500);

    expect(bloodBank.checkSurvival()).toBe(true);
  });

  test('Return false if not enough positive blood', () => {
    bloodBank.addBag('A+', 400);
    bloodBank.addBag('O-', 500);

    expect(bloodBank.checkSurvival()).toBe(false);
  });

  test('Sort blood bags by type and volume', () => {
    bloodBank.addBag('A-', 400);
    bloodBank.addBag('O+', 500);
    bloodBank.addBag('B-', 300);
    bloodBank.addBag('A+', 200);
    bloodBank.addBag('B-', 100);
    bloodBank.addBag('A+', 500);

    bloodBank.sortBags();

    expect(bloodBank.bloodBank[0]).toEqual({ bloodType: 'A+', amount: 200 });
    expect(bloodBank.bloodBank[1]).toEqual({ bloodType: 'O+', amount: 500 });
    expect(bloodBank.bloodBank[2]).toEqual({ bloodType: 'A+', amount: 500 });
    expect(bloodBank.bloodBank[3]).toEqual({ bloodType: 'B-', amount: 100 });
    expect(bloodBank.bloodBank[4]).toEqual({ bloodType: 'B-', amount: 300 });
    expect(bloodBank.bloodBank[5]).toEqual({ bloodType: 'A-', amount: 400 });
  });
});
