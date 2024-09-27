/*
#************************************#
#   COMPCLUB Spring Workshops 2024   #
#    Introduction to Javascript      #
#************************************#

By: <YOUR-NAME-HERE>
Written On: <DATE-HERE>

*/
// ****************************************************************************
// PART 5: [ ARRAYS ] 
// run the tests with 'npm test beginner-5'
// ****************************************************************************

// Tom made a list of all the creatures he saw.
// let creatures = ["ghost", "vampire", "zombie", "poltergeist", "witch", "mummy", "banshee"];  (example)

// Function: How many creatures are there?
export function numberofCreatures(creatures) {
    return creatures.length; 
}
  
// Function: What is the nth creature?
export function nthCreature(creatures, n) {
  return `The ${n}th creature is ${creatures.at(n)}`
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