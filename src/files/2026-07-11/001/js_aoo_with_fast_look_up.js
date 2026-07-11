// js_aoo_with_fast_look_up.js

let tree  = {
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
    creation_date: "2025-07-17" };

let world = [tree, rock, spawn]; // array part, order, sortable

world.tree_01 = tree; // hash part instant lookup
world.rock_01 = rock;
world.spawn_point = spawn;

console.log(world.rock_01.x); // 300 instant, no scanning

world.sort(function (a, b) {
    return new Date(a.creation_date) - new Date(b.creation_date);
});

console.log(world.rock_01.x); // still 300 sort never touched the named keys

/*
300
300
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

