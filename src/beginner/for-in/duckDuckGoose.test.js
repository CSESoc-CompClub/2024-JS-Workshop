import { expect, test } from "vitest";
import { duckDuckGoose } from "./duckDuckGoose.js";

test("Example array with a goose in the middle of it", () => {
	const array = [ "duck", "duck", "duck", "goose", "duck", "duck" ];
	expect(duckDuckGoose(array)).toBe("3");
});

test("Array with a goose at the front of it", () => {
	const array = [ "goose", "duck", "duck", "duck", "duck", "duck" ];
	const newArray = duckDuckGoose(array);
	expect(duckDuckGoose(array)).toBe("0");
});

test("Array with a goose at the end of it", () => {
	const array = [ "duck", "duck", "duck", "duck", "duck", "goose" ];
	expect(duckDuckGoose(array)).toBe("5");
});
