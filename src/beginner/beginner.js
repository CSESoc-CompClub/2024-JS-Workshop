export function sum(a, b) {
  return a + b;
}

// implement a method which returns the data type of a variable
export function typeOf(pumpkin) {
  return typeof pumpkin;
}

// implement a method which returns a number/array as a string
export function spookyString(thirteen) {
  return thirteen.toString();
}

// implement a method which parses a string and returns a (singular) whole number
// if there are multiple numbers, returns the first number
export function ghoulishNumbers(scarecrow) {
  return parseInt(scarecrow);
}

// write a phrase (other than NaN) that returns NaN
export function hauntedPhrase() {
  return NaN;
}

// arithmetic operators
// using x and y, return the specified value using an operator (only one!)

// return 50
export function mummyMultiplication() {
  let x = 5;
  let y = 10;
  return x * y;
}

// return 5
export function deviousDivision() {
  let x = 25;
  let y = 5;
  return x / y;
}

// return 2
export function rusticRemainder() {
  let x = 17;
  let y = 5;
  return x % y;
}

// return 64
export function evilExponent() {
  let x = 4;
  let y = 3;
  return x ** y;
}

// return 350 using only 100, 50, 3, +, *
export function potionOfPrecedence() {
  let x = 50;
  let y = 100;
  let z = 3;
  return x + y * z;
}

// return "halloween!"
export function creepyAdditon() {
  let x = "hallo"
  let y = "ween!"
  return x + y;
}

// return "my fave number is 13"
export function evenCreepierAdditon() {
  let x = "my fave number is "
  let y = 13
  return x + y;
}

// return false
export function spellbindingAnd() {
  let x = false;
  let y = false;

  return x && y;
}

// return true
export function ghostlyOr() {
  let x = true;
  let y = false;

  return x || y;
}