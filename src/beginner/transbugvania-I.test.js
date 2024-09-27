
import { vi, describe, beforeEach, test, toHaveBetweenCalledWith, expect } from "vitest";
import { greetingInstructions } from './beginner.js'; 


const logSpy  = vi.spyOn(console, 'log');


describe("Running transbugvania I test...", () => {
	
	beforeEach( () => {
	 	logSpy.mockRestore();
	});
	

	test("When guest = human...", () => {
		const logSpy  = vi.spyOn(global.console, 'log');
		greetingInstructions("human");

		expect(logSpy).toHaveBeenLastCalledWith("Boo!");
	});

	test("When guest = monster...", () => {
		const logSpy  = vi.spyOn(global.console, 'log');
		greetingInstructions("monster");
	
		expect(logSpy).toHaveBeenLastCalledWith("Welcome!");
	});

	
});
