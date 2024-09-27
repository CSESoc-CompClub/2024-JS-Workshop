/*
#************************************#
#   COMPCLUB Spring Workshops 2024   #
#    Introduction to Javascript      #
#************************************#

By: <YOUR-NAME-HERE>
Written On: <DATE-HERE>

*/
// ****************************************************************************
// PART 3: [ STRINGS ] 
// run the tests with 'npm test part3'
// ****************************************************************************

// Convert to uppercase
export function spookyScream(message) {
    return message.toUpperCase();
}
  
// Find if a string contains another string
export function witchHunt(haystack, needle) {
  return haystack.includes(needle);
}

// Return a spooky message with a variable
export function spookyMessage(creature) {
  return `Run! There's a ${creature} near you!`;
}