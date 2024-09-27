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
// run the tests with 'npm test part6'
// ****************************************************************************
// WHILE LOOPS ----------------------------------------------------------------
// Starting from n, keep decreasing by k until we reach or are lower than 0.
// The number of steps we take is stepsToZero(n, k)
export function stepsToZero(start, decrement) {
  // TODO: complete me!
}

// Starting from some number n, keep increasing by some amount k until we reach
// or exceed m. The number we end up with is firstBigger(n, m, k). That is,
// the first number bigger than m.
export function firstBigger(start, target, jump) {
  // TODO: complete me!
}

// How many times do we run the Collatz algorithm until we get to the number 1?
// Collatz algo:
// 	-> If that n is odd, multiply it by 3 and add one. 
// 	-> If the n is even, divide it by two.
//  -> Terminate when n = 1
export function collatzSteps(n) {
  // TODO: complete me!
}

// FOR LOOPS ------------------------------------------------------------------
// Write a function that sums the numbers from 0 to n
export function sumN(n) {
  // TODO: complete me!
}

// Write a function that sums the numbers from start to end
export function sumNM(start, end) {
  // TODO: complete me!
}

// Write a function that sums the numbers from start to end
// and increments by jump
export function skipSum(start, end, jump) {
  // TODO: complete me!
}

// FOR-OF LOOPS ---------------------------------------------------------------
// Find the average of a given array
export function average(nums) {
  // TODO: complete me!
}

// Given an array of numbers, return only the even numbers
export function mapEven(numbers) {
  // TODO: complete me!
}

// FOR-IN LOOPS ---------------------------------------------------------------
// Given an array full of ducks and one goose, return the index of the goose.
// If no goose is present, return -1.
export function duckDuckGoose(array) {
  // TODO: complete me!
}

// BREAK ----------------------------------------------------------------------
// For each animal in the array, array.push it's animal.name into a new array.
// If the animal.type is a "goose," break from the loop, and then print out the array.
export function duckDuckGoose2(array) {
  // TODO: complete me!
}

