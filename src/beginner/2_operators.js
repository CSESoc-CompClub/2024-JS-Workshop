/*
#************************************#
#   COMPCLUB Spring Workshops 2024   #
#    Introduction to Javascript      #
#************************************#

By: <YOUR-NAME-HERE>
Written On: <DATE-HERE>

*/
// ****************************************************************************
// PART 2: [ NUMBERS AND OPERATORS ] 
// ****************************************************************************

// Return the sum of x and y
export function creepyAdditon(x, y) {
    return x + y;
  }
  
  // Return the product of x and y
  export function mummyMultiplication(x, y) {
    return x * y;
  }
  
  // Return the quotient of x and y
  export function deviousDivision(x, y) {
    return x / y;
  }
  
  // Return the remainder from dividing x by y
  export function rusticRemainder(x, y) {
    return x % y;
  }
  
  // Return the result of x to the power of y
  export function evilExponent(x, y) {
    return x ** y;
  }
  
  // return 350 using only 100, 50, 3, +, * (and NO brackets!)
  export function potionOfPrecedence() {
    let x = 50;
    let y = 100;
    let z = 3;
    return x + y * z;
  }
  
  // return x AND y
  export function spellbindingAnd(x, y) {
    return x && y;
  }
  
  // return x OR y
  export function ghostlyOr(x, y) {
    return x || y;
  }
  
  // Round something to the nearest whole number
  export function monsterRound(monsterCount) {
    return Math.round(monsterCount);
  }
  
  // Return a random number between 0 and max
  export function vampireRandom(maxVampires) {
    if (maxVampires <= 0) return 0;
    return Math.floor(Math.random() * (maxVampires + 1));
  }