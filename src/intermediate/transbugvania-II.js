// Transbugvania II

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
