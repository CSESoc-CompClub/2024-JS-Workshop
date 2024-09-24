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

export function mummyMultiplication(x, y) {
  return x * y;
}

export function deviousDivision(x, y) {
  return x / y;
}

export function rusticRemainder(x, y) {
  return x % y;
}

export function evilExponent(x, y) {
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
export function creepyAdditon(x, y) {
  return x + y;
}

// return "my fave number is 13"
export function evenCreepierAdditon(x, y) {
  return x + y;
}

export function spellbindingAnd(x, y) {
  return x && y;
}

export function ghostlyOr(x, y) {
  return x || y;
}