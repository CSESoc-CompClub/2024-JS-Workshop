// Examples: 
// let bestiary = [ 
//     { 
//         name: "ghost",
//         spookiness: 2,
//         sightings: 3
//     },
//     {
//         name: "vampire",
//         spookiness: 5,
//         sightings: 10
//     },
//     {
//         name: "zombie",
//         spookiness: 0,
//         sightings: 0
//     },
//     {
//         name: "poltergeist",
//         spookiness: 7,
//         sightings: 10
//     }
// ]

// let exampleCreature = {
//     name: "mummy",
//     spookiness: 1,
//     sightings: 3
// }

// Function: add a creature to bestiary, given the creature details.
// Return the new bestiary
export function addCreature(bestiary, name, spookiness, sightings) {
    let creature = {
        name: name,
        spookiness: spookiness,
        sightings: sightings
    }
    let newXX = bestiary.push(creature)
    return bestiary;
}

// Function: check if a creature has been recorded in Tom's bestiary.
// Return true if it has been, return false otherwise.
export function creatureRecorded(bestiary, name) {
    for (let creature of bestiary) {
        if (creature.name == name) {
            return true;
        }
    }
    return false;
}

// Function: Check the spookiness value of the town. 
// When total spookiness < 100, return "Totally normal!"
// When total spookines is between and includes 100 to 300, return "Seems a little haunted..."
// WHen total spookiness > 300, return "My best friend is a poltergeist!"
export function townSpookiness(bestiary) {
    let totalSpookiness = 0;
    for (let creature of bestiary) {
        let spookiness = creature.spookiness * creature.sightings;
        totalSpookiness += spookiness;
    }
    if (totalSpookiness < 100) {
        return "Totally normal!";
    } else if (totalSpookiness >= 100 && totalSpookiness <= 300) {
        return "Seems a little haunted...";
    } else {
        return "My best friend is a poltergeist!";
    }
}

// Function: Check if Jerry's list of creatures (names) exist. 
// If they have all been sighted, return "They all exist!"
// If one or more have not been sighted, return "I didn't see them: [creature names, alphabetically ordered]"
export function notFound(bestiary, JerryList) {
    console.log(bestiary, JerryList)
    let doesntExist = []
    for (let name of JerryList) {
        console.log(name)
        if (creatureRecorded(bestiary, name) == false) {
            console.log("doesnt exist", name);
            doesntExist.push(name);
        } else if (creatureRecorded(bestiary, name) == true) {
            console.log("true", name)
            for (let creature of bestiary) {
                if (creature.name == name && creature.sightings == 0) {
                    doesntExist.push(name);
                }
            }
        }
    }

    if (doesntExist.length == 0) {
        console.log("length = 0", doesntExist);
        return "They all exist!";
    } else {
        console.log("length > 0", doesntExist)
        return "I didn't see them: " + doesntExist.sort().join(", ");
    }
}