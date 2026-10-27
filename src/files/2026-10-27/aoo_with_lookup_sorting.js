// aoo_with_lookup_sorting.js

let wordList = [
    {
        id: 'zebra',
        type: 'noun',
        priority: 3
    },

    {
        id: 'apple',
        type: 'noun',
        priority: 1
    },

    {
        id: 'run',
        type: 'verb',
        priority: 2
    }
];

let wordIndex = new Map();

// Build the index (Storing references, not row numbers)
for (const word of wordList) {
    wordIndex.set(word.id, word);
}

console.log("BEFORE SORTING");
console.log("Row 0 in Array:", wordList[0].id); // Output: zebra

// Sort the Array of Objects by priority
// This physically shuffles the books on the bookshelf.
wordList.sort((a, b) => a.priority - b.priority);

console.log("\nAFTER SORTING");
console.log("Row 0 in Array:", wordList[0].id); // Output: apple
console.log("Row 2 in Array:", wordList[2].id); // Output: zebra (Moved to the end!)

// The Magic Test
// Does the Map still know where 'zebra' is, even though it moved rows?
const target = wordIndex.get('zebra');

console.log("\nMAP LOOKUP TEST");
console.log("Map instantly found:", target.id);
console.log("Target priority is:", target.priority); // Output: 3

// Proving they are still connected
// If we update the target via the Map, it updates the sorted Array
target.priority = 17;
console.log("Updated priority in Array:", wordList[2].priority); // Output: 17

//----//

/*
BEFORE SORTING
Row 0 in Array: zebra

AFTER SORTING
Row 0 in Array: apple
Row 2 in Array: zebra

MAP LOOKUP TEST
Map instantly found: zebra
Target priority is: 3
Updated priority in Array: 17
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

