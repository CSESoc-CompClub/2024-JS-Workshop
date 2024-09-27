export function sum(a, b) {
  return a + b;
}


// Transbugvania I

// Task REPLACE_WITH_NUMBER
export function greetingInstructions(guest) {
        // TODO: fill out the instructions the minions should do!

        return;
}


// Transbugvania II

// Task REPLACE_WITH_NUMBER
export function checkIn(guest_tier, has_deal) {
	
	// TODO: Fix the instructions!
	if (guest_tier !== "standard") {
		console.log("Standard room")	
	} else if (guest_tier  === "superb") {
		console.log("Super room")
	} else if (guest_tier === "deluxe") {
		console.log("Deluxe room")
	} else if (has_deal === true) {
		console.log("standard room + ominous room servce") 
	} else if (guest_tier === "super" && has_deal === true) {
		console.log("Super room + creepy upgrade")
	} else  {
		console.log("Deluxe room + haunted upgrade")
	}
}


// Task implement the grocceries filter

// Task REPLACE_WITH_NUMBER
export function shoppingList(ingredients, already_own) {
	// TODO: write code which filters for the ingredients Poco doesn't have!
	
	const  a = [];
	for (let item of ingredients) {
		let contain = false 
		for (let item2 of already_own) {
			if (item === item2) {
				contain = true 
			}
		}

		if (contain === false) {
			a.push(item)
		} 
	}
	// Return a list of what needs to be bought!
	return a;
};


// console.log(shoppingList(["butter", "digestive biscuits", "egg white", "soft cheese", "pumpkin puree", "plain flour", "eggs", "whipping cream", "ground cinnamon", "pecans", "caramel sauce"], ["pumpkin puree", "plain flour", "eggs", "whipping cream", "ground cinnamon"]))
