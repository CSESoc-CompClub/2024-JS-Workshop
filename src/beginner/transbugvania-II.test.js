
import { vi, describe, beforeEach, test, toHaveBetweenCalledWith, expect } from "vitest";
import { checkIn, greetingInstructions } from './beginner.js'; 


const logSpy  = vi.spyOn(console, 'log');


describe("Running transbugvania II test...", () => {
	
	beforeEach( () => {
	 	logSpy.mockRestore();
	});
	

	test("when guest_tier = Standard room", () => {
		const logSpy  = vi.spyOn(global.console, 'log');
		checkIn("standard", false);

		expect(logSpy).toHaveBeenLastCalledWith("Standard room");
	});

	test("when guest_tier = Super room", () => {
		const logSpy  = vi.spyOn(global.console, 'log');
		checkIn("super", false);
	
		expect(logSpy).toHaveBeenLastCalledWith("Super room");
	});

	test("when guest_tier = Deluxe room", () => {
		const logSpy  = vi.spyOn(global.console, 'log');
		checkIn("deluxe", false);
	
		expect(logSpy).toHaveBeenLastCalledWith("Deluxe room");
	});
	
	test("when guest_tier = Standard room AND has_deal = true", () => {
		const logSpy  = vi.spyOn(global.console, 'log');
		checkIn("standard", true);
	
		expect(logSpy).toHaveBeenLastCalledWith("Sandard room + ominous room servce");
	});

	test("when guest_tier = Super room AND has_deal = true", () => {
		const logSpy  = vi.spyOn(global.console, 'log');
		checkIn("super", true);
	
		expect(logSpy).toHaveBeenLastCalledWith("Super room + creepy upgrade");
	});

	test("when guest_tier = Deluxe room AND has_deal = true", () => {
		const logSpy  = vi.spyOn(global.console, 'log');
		checkIn("deluxe", true);
	
		expect(logSpy).toHaveBeenLastCalledWith("Deluxe room + haunted servce");
	});

	test("when guest_tier = supreme max pro++ subscriber AND has_deal = has_deal = false  ------ THIS SHOULD NOT PRINT ANYTHING", () => {
		const logSpy  = vi.spyOn(global.console, 'log');
		checkIn("supreme max pro++ subscriber", false);
	
		expect(logSpy).toHaveBeenCalledTimes(0);
	});

	test("when guest_tier = supreme max pro++ subscriber AND has_deal = has_deal = true  ------ THIS SHOULD NOT PRINT ANYTHING", () => {
		const logSpy  = vi.spyOn(global.console, 'log');
		checkIn("supreme max pro++ subscriber", false);
	
		expect(logSpy).toHaveBeenCalledTimes(0);
	});
});
