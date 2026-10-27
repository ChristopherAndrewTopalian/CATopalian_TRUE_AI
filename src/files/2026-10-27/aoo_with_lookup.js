// aoo_with_lookup.js

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

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

