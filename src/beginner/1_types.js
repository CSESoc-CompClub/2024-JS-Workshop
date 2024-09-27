/*
#************************************#
#   COMPCLUB Spring Workshops 2024   #
#    Introduction to Javascript      #
#************************************#

By: <YOUR-NAME-HERE>
Written On: <DATE-HERE>

*/
// ****************************************************************************
// PART 1: [TYPES AND NUMBER METHODS] 
// ****************************************************************************

// implement a method which returns the data type of a variable
export function typeOf(pumpkin) {
    return typeof pumpkin;
  }
  
  // implement a method which returns a number/array as a string
  export function spookyString(item) {
    return item.toString();
  }
  
  // implement a method which parses a string and returns a (singular) whole number
  // if there are multiple numbers, returns the first number
  export function ghoulishNumbers(num) {
    return parseInt(num);
  }
  
  // return the spooky number (hint: not a number)
  export function hauntedPhrase() {
    return NaN;
  }