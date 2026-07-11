// js_aoo_with_fast_look_up.js

// 1. THE ARRAY PART
// We just write our objects cleanly inside the array.
// Notice we don't even need to invent variable names like 'pikachu = {' anymore!
let world = [
    {
        id: "pikachu",
        type: "electric",
        x: 100,
        y: 200,
        collidable: true
    },
    {
        id: "charizard",
        type: "fire",
        x: 300,
        y: 150,
        collidable: true
    },
    {
        id: "charmander",
        type: "fire",
        x: 50,
        y: 100,
        active: false
    }
];

// 2. THE AUTOMATED HASH BUILDER (The 3-line For Loop!)
// This completely replaces having to type out lookups manually!
for (let i = 0; i < world.length; i++) 
{
    world[world[i].id] = world[i];
}

// --- PROOF THE INSTANT LOOKUP WORKS ---
world.pikachu.x = 500;

console.log("Pikachu X via named lookup is now: " + world.pikachu.x); // 500
console.log("Array Slot 0 X via number index is also: " + world[0].x); // 500

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

