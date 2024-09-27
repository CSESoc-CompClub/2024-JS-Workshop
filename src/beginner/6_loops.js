/*
#************************************#
#   COMPCLUB Spring Workshops 2024   #
#    Introduction to Javascript      #
#************************************#

By: <YOUR-NAME-HERE>
Written On: <DATE-HERE>

*/
// ****************************************************************************
// PART 6: [ LOOPS ] 
// run the tests with 'npm test beginner-6'
// ****************************************************************************
// WHILE LOOPS ----------------------------------------------------------------
// Starting from n, keep decreasing by k until we reach or are lower than 0.
// The number of steps we take is stepsToZero(n, k)
export function stepsToZero(start, decrement) {
  let count = 0;
  
  while (start > 0) {
    start -= decrement;
    count++;
  }

  return count;
}

// Starting from some number n, keep increasing by some amount k until we reach
// or exceed m. The number we end up with is firstBigger(n, m, k). That is,
// the first number bigger than m.
export function firstBigger(start, target, jump) {
  while (start <= target) {
    start += jump;
  }

  return start;
}

// How many times do we run the Collatz algorithm until we get to the number 1?
// Collatz algo:
// 	-> If that n is odd, multiply it by 3 and add one. 
// 	-> If the n is even, divide it by two.
//  -> Terminate when n = 1
export function collatzSteps(n) {
  let steps = 0;
  
  while (n != 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    steps++;
  }

  return steps;
}

// FOR LOOPS ------------------------------------------------------------------
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

// FOR-OF LOOPS ---------------------------------------------------------------
// Find the average of a given array
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

// Given an array of numbers, return only the even numbers
export function mapEven(numbers) {
  const evenNumbers = [];

  for (const number of numbers) {
    if (number % 2 == 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}

// FOR-IN LOOPS ---------------------------------------------------------------
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

// BREAK ----------------------------------------------------------------------
// For each animal in the array, array.push it's animal.name into a new array.
// If the animal.type is a "goose," break from the loop, and then print out the array.
export function duckDuckGoose2(array) {
  const new_array = [];
  for (let animal of array) {
    if (animal.type == "goose") break;
    new_array.push(animal.name)
  }

  return new_array;
}

