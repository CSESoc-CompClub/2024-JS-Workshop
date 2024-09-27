import { vi, describe, beforeEach, test, toHaveBeenLastCalledWith, expect } from "vitest";
import { automuta } from "./intermediate.js";

const logSpy  = vi.spyOn(console, 'log');

describe("Frankenstein automata", () => {
	beforeEach( () => {
                logSpy.mockRestore();
        });

	test("3 workers, 2 brutes", () => {
		let supply = {
			"Big part" : 2,
			"Small part" : 10,
			"Weak spirit" : 3,
			"Unstable spirit" : 1,
			"Refined spirit" : 1
		}

		let order = {
			"workers" : 2,
			"brutes" : 1,
			"drones" : 0
		}

		automuta(supply, order)

		expect(logSpy).toHaveBeenLastCalledWith("Order meet")
	});
	
	test("2 workers, 1 brutes, 1 drones", () => {
		let supply = {
			"Big part" : 2,
			"Small part" : 10,
			"Weak spirit" : 2,
			"Unstable spirit" : 1,
			"Refined spirit" : 1
		}

		let order = {
			"workers" : 2,
			"brutes" : 1,
			"drones" : 1
		}

		automuta(supply, order)

		expect(logSpy).toHaveBeenLastCalledWith("Order meet")
	});


	test("2 workers, 1 brutes, 1 drones", () => {
		let supply = {
			"Big part" : 2,
			"Small part" : 10,
			"Weak spirit" : 2,
			"Unstable spirit" : 1,
			"Refined spirit" : 1
		}

		let order = {
			"workers" : 2,
			"brutes" : 1,
			"drones" : 2
		}

		automuta(supply, order)

		expect(logSpy).toHaveBeenLastCalledWith("Order not meet")
	});
});
