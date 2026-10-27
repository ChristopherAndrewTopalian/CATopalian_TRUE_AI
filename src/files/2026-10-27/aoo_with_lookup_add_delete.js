// aoo_with_lookup_add_delete.js

let wordList = [
    {
        id: 'apple',
        type: 'noun'
    },

    {
        id: 'run',
        type: 'verb'
    }
];

let wordIndex = new Map();

for (const word of wordList)
{
    wordIndex.set(word.id, word);
}

// ADDING DATA
// We create the new object once
const newWord = { id: 'jump', type: 'verb' };

// We hand the exact same object to both structures
wordList.push(newWord);
wordIndex.set(newWord.id, newWord);

console.log("After Add - Array Length:", wordList.length); // 3
console.log("After Add - Map Size:", wordIndex.size);      // 3

// DELETING DATA
const targetId = 'apple';

// Remove from the Map (Instant)
wordIndex.delete(targetId);

// Remove from the Array (Requires finding the row)
const rowIndex = wordList.findIndex(word => word.id === targetId);
if (rowIndex !== -1)
{
    wordList.splice(rowIndex, 1);
}

console.log("\nAfter Delete - Array Length:", wordList.length); // 2
console.log("After Delete - Map Size:", wordIndex.size);   // 2
console.log("Is apple in Map?", wordIndex.has('apple'));   // false

//----//

/*
After Add - Array Length: 3
After Add - Map Size: 3

After Delete - Array Length: 2
After Delete - Map Size: 2
Is apple in Map? false
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

