export function skipSum(start, end, jump) {
	let sum = 0;

	for (let i = start; i <= end; i += jump) {
		sum += i;
	}

	return sum;
}
