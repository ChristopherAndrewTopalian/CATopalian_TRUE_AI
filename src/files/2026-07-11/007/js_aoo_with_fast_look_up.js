// js_aoo_with_fast_look_up.js

// 1. THE ARRAY PART (The raw data)
// We just write clean, simple objects inside our array.
// Notice that every object has its 'id' stored safely inside it.
let world = [
    {
        id: "tree_01",
        type: "oak",
        x: 100,
        y: 200,
        collidable: true
    },
    {
        id: "rock_01",
        type: "boulder",
        x: 300,
        y: 150,
        collidable: true
    },
    {
        id: "spawn_point",
        type: "portal",
        x: 0,
        y: 0,
        active: false
    }
];

// A variable to hold our save data in memory
let savedLevelData = "";

// 2. THE AUTOMATED HASH BUILDER
// This function loops through the array and uses the 'id' property 
// to automatically attach the fast-lookup string names!
function rebuildLookups(targetArray) 
{
    for (let i = 0; i < targetArray.length; i++) 
    {
        let item = targetArray[i];
        
        // THIS is where the magic happens automatically.
        // It essentially writes: targetArray["tree_01"] = item;
        targetArray[item.id] = item;
    }
}

// Build the lookups for the very first time when the game starts
rebuildLookups(world);

// --- PROOF THE LOOKUP WORKS ---
console.log("Initial Tree Type: " + world["tree_01"].type); // oak

// Keyboard Controls for Saving and Loading
document.addEventListener('keydown', function(event)
{
    // --- SAVE THE WORLD ---
    if (event.key === 's')
    {
        // JSON.stringify drops the hash lookups, creating a clean array.
        // But the objects inside still have their "id" properties safe!
        savedLevelData = JSON.stringify(world, null, 2);

        let date = new Date().toLocaleString('en-US');
        console.log('World Saved! ' + date);
        console.log(savedLevelData);
        console.log('---------------------------');
    }

    // --- LOAD THE WORLD ---
    if (event.key === 'l')
    {
        if (savedLevelData === "") 
        {
            console.log("Nothing to load! Press 's' first.");
            return;
        }

        console.log("Loading world data...");

        // 1. Parse the JSON back into a standard Numbered Array
        world = JSON.parse(savedLevelData);

        // 2. Re-run our automated builder to instantly re-attach the fast lookups!
        rebuildLookups(world);

        console.log("World Loaded & Fast Lookups Restored!");
        
        // PROOF IT WORKED AFTER LOADING:
        console.log("Testing restored lookup... Rock X is: " + world["rock_01"].x);
        console.log('---------------------------');
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

