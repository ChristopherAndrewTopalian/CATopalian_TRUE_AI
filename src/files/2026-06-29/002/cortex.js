// cortex.js

let cortex = [
    {
        concept: "bird",
        category: "animal",
        attributes: ["has feathers", "lays eggs", "has beak", "can fly"],
        archetypes: ["robin", "blue jay", "crow", "eagle"],
        action: "flies"
    },
    {
        concept: "robin",
        root: "bird", // Points using the WORD, not a number
        attributes: ["red breast", "sings beautifully", "skittish"],
        action: "hops"
    },
    {
        concept: "blue jay",
        root: "bird",
        attributes: ["blue crest", "loud call", "aggressive"],
        action: "swoops"
    },
    {
        concept: "dog",
        category: "animal",
        attributes: ["has fur", "has paws", "loyal"],
        archetypes: ["puppy", "retriever", "hound"],
        action: "runs"
    },
    {
        concept: "puppy",
        root: "dog",
        attributes: ["small", "playful", "clumsy"],
        action: "tumbles"
    }
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

