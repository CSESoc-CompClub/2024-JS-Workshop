/*
#************************************#
#   COMPCLUB Spring Workshops 2024   #
#    Introduction to Javascript      #
#************************************#

By: <YOUR-NAME-HERE>
Written On: <DATE-HERE>

*/
// ****************************************************************************
// INTERMEDIATE 1: SPOOKY TOWN (objects)
// run the tests with 'npm test spookytown'
// ****************************************************************************
/*
Examples: 
let bestiary = [ 
    { 
        name: "ghost",
        spookiness: 2,
        sightings: 3
    },
    {
        name: "vampire",
        spookiness: 5,
        sightings: 10
    },
    {
        name: "zombie",
        spookiness: 0,
        sightings: 0
    },
    {
        name: "poltergeist",
        spookiness: 7,
        sightings: 10
    }
]

let exampleCreature = {
    name: "mummy",
    spookiness: 1,
    sightings: 3
}
*/

// Function: add a creature to bestiary, given the creature details.
// Return the new bestiary
export function addCreature(bestiary, name, spookiness, sightings) {
  return 0;
}

// Function: check if a creature has been recorded in Tom's bestiary.
// Return true if it has been, return false otherwise.
export function creatureRecorded(bestiary, name) {
  return 0;
}

// Function: Check the spookiness value of the town. 
// When total spookiness < 100, return "Totally normal!"
// When total spookines is between and includes 100 to 300, return "Seems a little haunted..."
// WHen total spookiness > 300, return "My best friend is a poltergeist!"
export function townSpookiness(bestiary) {
  return 0;
}

// Function: Check if Jerry's list of creatures (names) exist. 
// If they have all been sighted, return "They all exist!"
// If one or more have not been sighted, return "I didn't see them: [creature names, alphabetically ordered]"
export function notFound(bestiary, JerryList) {
  return 0;
}