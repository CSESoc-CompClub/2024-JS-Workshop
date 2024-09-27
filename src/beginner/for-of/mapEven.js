export function mapEven(numbers) {
	const evenNumbers = [];

	for (const number of numbers) {
		if (number % 2 == 0) {
			evenNumbers.push(number);
		}
	}

	return evenNumbers;
}
