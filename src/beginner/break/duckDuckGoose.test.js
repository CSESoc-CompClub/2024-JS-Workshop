import { expect, test } from "vitest";
import { duckDuckGoose } from "./duckDuckGoose.js";

test("Example array with a goose in the middle of it", () => {
	const array = [ { name: "A", type: "duck" }, { name: "B", type: "duck" }, { name: "C", type: "duck" }, { name: "D", type: "goose" }, { name: "E", type: "duck" }, { name: "F", type: "duck" } ];
	const newArray = duckDuckGoose(array);
	expect(newArray).toContain("A");
	expect(newArray).toContain("B");
	expect(newArray).toContain("C");
	expect(newArray).not.toContain("D");
	expect(newArray).not.toContain("E");
	expect(newArray).not.toContain("F");
});

test("Array with a goose at the front of it", () => {
	const array = [ { name: "A", type: "goose" }, { name: "B", type: "duck" }, { name: "C", type: "duck" }, { name: "D", type: "duck" }, { name: "E", type: "duck" }, { name: "F", type: "duck" } ];
	const newArray = duckDuckGoose(array);
	expect(newArray).not.toContain("A");
	expect(newArray).not.toContain("B");
	expect(newArray).not.toContain("C");
	expect(newArray).not.toContain("D");
	expect(newArray).not.toContain("E");
	expect(newArray).not.toContain("F");
});

test("Array with a goose at the end of it", () => {
	const array = [ { name: "A", type: "duck" }, { name: "B", type: "duck" }, { name: "C", type: "duck" }, { name: "D", type: "duck" }, { name: "E", type: "duck" }, { name: "F", type: "goose" } ];
	const newArray = duckDuckGoose(array);
	expect(newArray).toContain("A");
	expect(newArray).toContain("B");
	expect(newArray).toContain("C");
	expect(newArray).toContain("D");
	expect(newArray).toContain("E");
	expect(newArray).not.toContain("F");
});
