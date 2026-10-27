// aoo_with_lookup_modifying_data.js

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

// WE DO NOT STORE THE ROW NUMBER (i).
// We store the actual object reference.
for (const word of wordList)
{
    wordIndex.set(word.id, word);
}

//----//

// Look it up instantly via the Map
const target = wordIndex.get('apple');
target.type = 'fruit';

// Check the Array? It is already updated.
console.log(wordList[0].type); // Output: 'fruit'

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

