/*
#************************************#
#   COMPCLUB Spring Workshops 2024   #
#    Introduction to Javascript      #
#************************************#

By: <YOUR-NAME-HERE>
Written On: <DATE-HERE>

*/
// ****************************************************************************
// INTERMEDIATE 2: BLOODBANK (classes)
// ****************************************************************************

export class BloodBank {
    constructor() {
        this.bloodBank = [];
        this.positiveTypes = ['O+', 'A+', 'B+'];
        this.validBlood = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-'];
    }

    // Function to add blood to the blood bank
    addBag(bloodType, amount) {
        if (!this.validBlood.includes(bloodType)) {
            console.log("Invalid blood type!");
            return;
        }

        this.bloodBank.push({ bloodType: bloodType, amount: amount });
    }

    // Function to print the log of the blood bank
    printLog() {
        console.log("Blood Bank Log:");
        this.bloodBank.forEach((bag, index) => {
            console.log(`Bag ${index + 1}: ${bag.amount} ml of ${bag.bloodType}`);
        });
    }

    // Function to check if the vampire has enough positive blood to survive
    checkSurvival() {
        let totalPositiveBlood = 0;

        this.bloodBank.forEach(bag => {
            if (this.positiveTypes.includes(bag.bloodType)) {
                totalPositiveBlood += bag.amount;
            }
        });

        if (totalPositiveBlood >= 1000) {
            console.log("There is enough blood :)");
            return true;
        } else {
            console.log("There isn't enough blood :(");
            return false;
        }
    }

    // Function to sort by type (postive or negative) then volume
    sortBags() {
        this.bloodBank.sort((a, b) => {
            // Sort by blood type
            const aIsPositive = this.positiveTypes.includes(a.bloodType);
            const bIsPositive = this.positiveTypes.includes(b.bloodType);

            if (aIsPositive && !bIsPositive) return -1;
            if (!aIsPositive && bIsPositive) return 1;

            // Sort by amount in ascending order
            return a.amount - b.amount;
        });
    }
}