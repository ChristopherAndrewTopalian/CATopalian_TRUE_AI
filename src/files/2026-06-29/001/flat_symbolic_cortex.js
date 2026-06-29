// The Flat Symbolic Cortex (Zero Nesting)
// Every word is an equal citizen. Meaning is derived entirely from Pointers (IDs).

let cortex = [
    // --- THE CANINE CLUSTER ---
    {
        id: 0,
        word: "dog",
        type: "base",
        root: 0,
        rel: [4],
        freq: 9500
    }, // Base concept

    {
        id: 1,
        word: "dogs",
        type: "plural",
        root: 0,
        rel: [4],
        freq: 6200
    }, // Points to 0
    
    {
        id: 2,
        word: "doggy",
        type: "slang",
        root: 0,
        rel: [4],
        freq: 1200
    }, // Points to 0

    {
        id: 3,
        word: "puppy",
        type: "child", 
        root: 0,
        rel: [4],
        freq: 4000
    }, // Points to 0

    // --- THE FELINE CLUSTER ---
    {
        id: 4,
        word: "cat",
        type: "base",
        root: 4,
        rel: [0],
        freq: 8200
    }, 

    {
        id: 5,
        word: "cats",
        type: "plural",
        root: 4,
        rel: [0],
        freq: 5100
    },

    {
        id: 6,
        word: "kitty", 
        type: "slang",
        root: 4,
        rel: [0],
        freq: 3000
    },

    {
        id: 7,
        word: "kitten",
        type: "child",
        root: 4,
        rel: [0],
        freq: 3500
    },

    // --- THE AVIAN CLUSTER ---
    {
        id: 8,
        word: "bird",
        type: "base",
        root: 8,
        rel: [],
        freq: 7000
    },

    {
        id: 9,
        word: "birds",
        type: "plural",
        root: 8,
        rel: [],
        freq: 4500
    },

    {
        id: 10,
        word: "birdie",
        type: "slang",
        root: 8,
        rel: [],
        freq: 900
    }
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

