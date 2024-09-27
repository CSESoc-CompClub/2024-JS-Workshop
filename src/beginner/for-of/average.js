export function average(nums) {
	let sum = 0;

	for (let n of nums) {
		sum += n;
	}
	
	if (nums.length > 0) {
		return sum / nums.length;
	} else {
		return sum;
	}

}
