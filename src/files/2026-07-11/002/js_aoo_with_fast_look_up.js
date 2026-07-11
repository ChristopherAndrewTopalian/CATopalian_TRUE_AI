// js_aoo_with_fast_look_up.js

// Our worldwide hybrid database
let world = [];

// A variable to hold our saved JSON string (simulating a file)
let savedWorldString = "";

// AUTOMATED HYBRID REGISTRATION
function registerEntity(id, type, x, y, collidable, creation_date)
{
    let newEntity = {
        id: id,
        type: type,
        x: x,
        y: y,
        collidable: collidable,
        creation_date: creation_date
    };

    // Add to the Array part (for sorting and looping)
    world.push(newEntity);

    // Add to the Hash part (for instant direct lookup)
    world[id] = newEntity;
}

// ENGINE INITIALIZATION
function initEngine()
{
    registerEntity("tree_01", "oak", 100, 200, true, "2024-03-19");

    registerEntity("rock_01", "boulder", 300, 150, true, "2024-03-17");

    registerEntity("spawn_point", "portal", 0, 0, false, "2025-07-17");

    console.log("Engine Initialized.");
    console.log("Direct Lookup Test (Rock X): " + world.rock_01.x); // Instant lookup!
    console.log("-------------------------------------------------");
}

// KEYBOARD CONTROLS (SAVE & LOAD)
document.addEventListener('keydown', function(event)
{
    // SAVE THE WORLD
    if (event.key === 's')
    {
        // JSON.stringify naturally ignores our named hash links!
        // It creates a clean, lightweight array of objects.
        savedWorldString = JSON.stringify(world, null, 2);

        let date = new Date().toLocaleString('en-US');

        console.log("World Saved! " + date);
        console.log(savedWorldString);
        console.log("-------------------------------------------------");
    }

    // LOAD THE WORLD
    if (event.key === 'l')
    {
        if (savedWorldString === "")
        {
            console.log("Nothing to load! Press 's' to save first.");
            return;
        }

        console.log("Loading World...");

        // Parse the JSON back into a standard Array
        world = JSON.parse(savedWorldString);

        // Re-attach our instant Hash Lookups!
        for (let i = 0; i < world.length; i++)
        {
            let item = world[i];
            
            // This rebuilds world.tree_01, world.rock_01, etc.
            world[item.id] = item;
        }

        console.log("World Loaded and Hash Links Rebuilt!");
        
        // Prove that the direct lookup works again immediately
        console.log("Testing Rebuilt Lookup (Tree Type): " + world.tree_01.type);
        console.log("-------------------------------------------------");
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

