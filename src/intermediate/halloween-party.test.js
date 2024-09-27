
import { describe, test,  expect, toEqual } from "vitest";
import { shoppingList  } from './intermediate.js'; 


describe("Halloween party test...", () => {

	test("Getting missing ingredients", () => {
		expect(shoppingList(["Soft butter", "Peanut butter", "Golden caster sugar", "medium egg", "vanilla extract", "plain flour", "bicarbonate soda", "milk chocolate"], ["vanilla extract", "plain flour", "bicarbonate soda", "milk chocolate"])).toEqual([ 'Soft butter', 'Peanut butter', 'Golden caster sugar', 'medium egg' ])
	});

	test("Has no missing ingredients", () => {
		expect(shoppingList(["butter", "digestive biscuits", "egg white", "soft cheese", "pumpkin puree", "plain flour", "eggs", "whipping cream", "ground cinnamon", "pecans", "caramel sauce"], ["butter", "digestive biscuits", "egg white", "soft cheese", "pumpkin puree", "plain flour", "eggs", "whipping cream", "ground cinnamon", "pecans", "caramel sauce"])).toEqual([])
	});

	test("Has none of the ingredients", () => {
		expect(shoppingList(["kitkats", "m & ms", "mars bars", "lolipops"], [])).toEqual(["kitkats", "m & ms", "mars bars", "lolipops"])
	});
});
