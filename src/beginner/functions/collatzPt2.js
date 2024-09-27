// Write a function called funcA that, given a number, returns the number multiplied by 3, plus 1.
export function funcA(n) {
	return 3 * n + 1;
}

// Write a function called funcB that, given a number, returns half that number.
export function funcB(n) {
	return n / 2;
}

// Write a function called compositeFunc that, given a number, n, if n is odd, return funcA(n), else return funcB(n).
export function compositeFunc(n) {
	if (n % 2 == 0) {
		return funcB(n);
	} else {
		return funcA(n);
	}
}

// Write a function called collatzSteps that performs the following 
// using a loop of some kind (for/while/recursion):
	// Given a number, n0, run compositeFunc(n0), and get it's output, n1.
	// Then, run compositeFunc(n1), and get it's output, n2.
	// ...
	// Stop when the output is equal to 1, and return how many times compositeFunc was run.

export function collatzSteps(n) {
	
	let steps = 1;
	
	while (compositeFunc(n) != 1) {
		steps++;
		n = compositeFunc(n);
	}

	return steps;
}
