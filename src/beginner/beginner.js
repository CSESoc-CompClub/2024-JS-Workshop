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

// Tom made a list of all the creatures he saw.
// let creatures = ["ghost", "vampire", "zombie", "poltergeist", "witch", "mummy", "banshee"];  (example)

// Arrays: Methods
// Fcuntion: How many creatures are there?
export function numberofCreatures(creatures) {
  return creatures.length; 
}

// He found a new creature! 
// Function: Add a creature to the list called 'creatures', and return the new list.
export function addCreature(creatures, newCreature) {
  creatures.push(newCreature);
  return creatures;
}

// He made a mistake and actually didn't see the last one! 
// Function: Remove the last creature from the list called 'creatures, and return the new list. 
export function removeCreature(creatures) {
  creatures.pop();
  return creatures;
}

// He wants to organise his list!
// Function: Sort the creatures list in alphabetical order and return the new list. 
export function creaturesSorted(creatures) {
  return creatures.sort();
}

// He wants to check if a specific creature is in his list!
// Function: given a list called 'creatures', and a specific 'creature', check if 'creature' is in the list
// If it exists, return true.
// If it doesn't exist, return null. 
export function foundCreature(creatures, creature) {
  if (creatures.includes(creature)) {
    return true;
  } else {
    return null;
  }
}