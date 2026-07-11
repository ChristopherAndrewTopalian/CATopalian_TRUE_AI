// js_aoo_with_fast_look_up.js

// 1. THE ARRAY PART (Raw Data Storage)
// Clean, simple object literals. No variable assignment shorthands needed!
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

// A variable to hold our saved JSON string in memory
let savedWorldData = "";

// 2. THE AUTOMATED HASH BUILDER (The Indexer)
// We wrap our 3-line loop in a simple ES5 function so we can call it 
// both at startup AND immediately after loading from a save file!
function buildLookups(targetArray) 
{
    for (let i = 0; i < targetArray.length; i++) 
    {
        // Automatically creates: targetArray["pikachu"] = targetArray[0];
        targetArray[targetArray[i].id] = targetArray[i];
    }
}

// Build the fast-lookup index for the first time on startup
buildLookups(world);

// --- PROVE THE INSTANT LOOKUP WORKS ---
world.pikachu.x = 500;
console.log("Startup Test -> Pikachu X is now: " + world.pikachu.x); // 500
console.log("--------------------------------------------------");

// 3. KEYBOARD CONTROLS (Save & Load)
document.addEventListener('keydown', function(event)
{
    // --- SAVE THE WORLD (Press 's') ---
    if (event.key === 's')
    {
        // JSON.stringify strictly converts the numbered array slots [0, 1, 2].
        // It automatically ignores the hash strings, preventing duplicate memory in the save!
        savedWorldData = JSON.stringify(world, null, 2);

        let date = new Date().toLocaleString('en-US');
        console.log("World Saved! " + date);
        console.log(savedWorldData);
        console.log("--------------------------------------------------");
    }

    // --- LOAD THE WORLD (Press 'l') ---
    if (event.key === 'l')
    {
        if (savedWorldData === "") 
        {
            console.log("Nothing to load yet! Press 's' to save first.");
            return;
        }

        console.log("Loading World Data...");

        // Step A: Parse the JSON string back into a standard Array
        world = JSON.parse(savedWorldData);

        // Step B: Re-run our automated indexer to restore instant O(1) lookups!
        buildLookups(world);

        console.log("World Loaded & Fast Lookups Restored!");
        
        // PROOF OF RESTORED LOOKUP:
        // Even after wiping and reloading from JSON, direct name targeting works instantly!
        console.log("Load Test -> Charizard type is: " + world.charizard.type);
        console.log("--------------------------------------------------");
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

