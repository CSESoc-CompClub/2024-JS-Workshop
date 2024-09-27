// Given an array full of ducks and one goose, return the index of the goose.
// If no goose is present, return -1.
export function duckDuckGoose(array) {
	for (let index in array) {
		if (array[index] == "goose") {
			return index;
		}
	}

	return -1;
}

