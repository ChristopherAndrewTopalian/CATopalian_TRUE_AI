// js_aoo_with_fast_look_up.js

let world = [];

let tree = {
    id: "tree_01",
    type: "oak",
    x: 100,
    y: 200,
    collidable: true,
    creation_date: "2024-03-19"
};

let rock  = {
    id: "rock_01",
    type: "boulder",
    x: 300,
    y: 150,
    collidable: true,
    creation_date: "2024-03-17"
};

let spawn = {
    id: "spawn_point",
    type: "portal",
    x: 0,
    y: 0,
    active: false,
    creation_date: "2025-07-17"
};

// ARRAY PART (integer keys), gives you order, and .sort() works on this
world[0] = tree;
shortWorld = world; // (In JS we start at index 0 instead of Lua's 1!)
world[1] = rock;
world[2] = spawn;

// HASH PART (string keys), gives you instant lookup
// Same objects in memory, not copies, one shared source of truth!
world["tree_01"]     = tree;
world["rock_01"]     = rock;
world["spawn_point"] = spawn;

// INSTANT LOOKUP, exactly like Lua!
console.log(world["rock_01"].x); // 300

// SORT THE ARRAY PART — .sort only touches indices 0 to world.length - 1
// The string keys are completely untouched by it!
world.sort(function(a, b) 
{
    return new Date(a.creation_date) - new Date(b.creation_date);
});

for (let i = 0; i < world.length; i++) 
{
    console.log(world[i].id + " - " + world[i].creation_date);
}

/*
rock_01 - 2024-03-17
tree_01 - 2024-03-19
spawn_point - 2025-07-17
*/

// LOOKUP STILL WORKS AFTER SORTING — nothing about the hash part moved!
console.log(world["rock_01"].x); // still 300

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

