// For each animal in the array, array.push it's animal.name into a new array.
// If the animal.type is a "goose," break from the loop, and then print out the array.
export function duckDuckGoose(array) {
	const new_array = [];
	for (let animal of array) {
		if (animal.type == "goose") break;
		new_array.push(animal.name)
	}

	return new_array;
}

