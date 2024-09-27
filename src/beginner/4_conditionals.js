/*
#************************************#
#   COMPCLUB Spring Workshops 2024   #
#    Introduction to Javascript      #
#************************************#

By: <YOUR-NAME-HERE>
Written On: <DATE-HERE>

*/
// ****************************************************************************
// PART 4: [ CONDITIONALS ] 
// run the tests with 'npm test part4'
// ****************************************************************************

// Function: Which candy has the cheapest price? Return the cost of that candy.
// Assume variables are numbers and the cost of the two candies are not equal. 
export function candyCost(spookyCandy, ghostlyCandy) {
  if (ghostlyCandy < spookyCandy) {
    return ghostlyCandy;
  } else {
    return spookyCandy;
  }
}
  
// Tom investigated a town on the eve of Halloween and found it filled with spooky creatures!
// Help him create an app to record his findings!

// Function: Return a string that states the alarm that should be sent when a scary monster is noticed. 
// Tom has only seen 4 creatures, anything else should return a 'Help! Unknown!' string.
    // ghost: Scary!
    // vampire: Dangerous!
    // witch: Run away!
    // banshee: Loud!
    // Anything else: Help! Unknown!
export function creatureAlarm(creature) {
  if (creature == 'ghost') {
    return 'Scary!';
  } else if (creature == 'vampire') {
    return 'Dangerous!';
  } else if ( creature == 'witch') {
    return 'Run away!';
  } else if (creature == 'banshee') {
    return 'Loud!';
  } else {
    return 'Help! Unknown!';
  }
}