import { describe, expect, test } from "vitest";
import { 
    creepyAdditon, 
    mummyMultiplication,
    deviousDivision,
    rusticRemainder,
    evilExponent,
    potionOfPrecedence
} from "../../2_operators.js";

describe("creepyAddition", () => {
    test("adding numbers", () => {
        expect(creepyAdditon(1, 2)).toBe(3);
    });
    
    test("string concatenation", () => {
        expect(creepyAdditon("hallo", "ween!")).toBe("halloween!");
    });
    
    test("adding different types", () => {
        expect(creepyAdditon("my fave number is ", 13)).toBe("my fave number is 13");
    });
});


test("mummyMultiplication", () => {
    expect(mummyMultiplication(5, 10)).toBe(50);
});

test("deviousDivision", () => {
    expect(deviousDivision(18, 3)).toBe(6);
});

test("rusticRemainder", () => {
    expect(rusticRemainder(17, 5)).toBe(2);
});

test("evilExponent", () => {
    expect(evilExponent(2, 3)).toBe(8);
});

test("precedence", () => {
    expect(potionOfPrecedence()).toBe(350);
});