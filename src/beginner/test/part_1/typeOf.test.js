import { expect, test, describe } from "vitest";
import { typeOf } from "../../beginner.js";

describe("type of Number", () => {
	test("integer number", () => {
		expect(typeOf(10)).toBe("number");
	});
	
	test("number with decimal", () => {
		expect(typeOf(3.14)).toBe("number");
	});
})


test("typeof string", () => {
	expect(typeOf("John")).toBe("string");
});

describe("typeof Boolean", () => {
	test("true", () => {
		expect(typeOf(true)).toBe("boolean");
	})

	test("false", () => {
		expect(typeOf(false)).toBe("boolean");
	  });
})


test("typeof bigint", () => {
	expect(typeOf(1234n)).toBe("bigint");
});

test("typeof symbol", () => {
	expect(typeOf(Symbol())).toBe("symbol");
});
