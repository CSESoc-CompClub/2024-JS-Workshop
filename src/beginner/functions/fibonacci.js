// Write a 'recursive' function that calculates the 'n'-th Fibonacci number
export function fibonacci(n) {
	if (n == 1 || n == 2) {
		return 1;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
}
