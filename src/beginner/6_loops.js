/*
#************************************#
#   COMPCLUB Spring Workshops 2024   #
#    Introduction to Javascript      #
#************************************#

By: <YOUR-NAME-HERE>
Written On: <DATE-HERE>

*/
// ****************************************************************************
// PART 6: [ LOOOPS ] 
// ****************************************************************************

// Write a function that sums the numbers from 0 to n
export function sumN(n) {
	let sum = 0;
	for (let i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
}

// Write a function that sums the numbers from start to end
export function sumNM(start, end) {
	let sum = 0;
	for (let i = start; i <= end; i++) {
		sum += i;
	}
	return sum;
}

// Write a function that sums the numbers from start to end
// and increments by jump
export function skipSum(start, end, jump) {
	let sum = 0;
	for (let i = start; i <= end; i += jump) {
		sum += i;
	}
	return sum;
}