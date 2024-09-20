export function firstBigger(start, target, jump) {
	while (start <= target) {
		start += jump;
	}

	return start;
}
