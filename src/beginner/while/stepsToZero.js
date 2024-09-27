export function stepsToZero(start, decrement) {
	let count = 0;
	
	while (start > 0) {
		start -= decrement;
		count++;
	}

	return count;
}
