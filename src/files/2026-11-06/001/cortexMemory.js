// cortexMemory.js

// 1. THE TIMELINE (Array of Objects)
// This stores concepts in chronological order. Nothing is ever deleted, only pushed.
let cortexMemory = [
    {
        keyword: "bird",
        aliases: ["birds", "birdie"], // We moved the loose pointers inside!
        root: ["animal", "vertebrates"],
        aka: ["birds", "birdie", "avian"],
        category: ["animal", "life", "ave", "creature", "being", "vertebrate"],
        types: ["blackbird", "blue jay", "bluebird", "canary", "chicken", "crane", "crow", "eagle", "falcon", "hawk", "hummingbird", "Owl", "parrot", "pelican", "penguin", "robin", "sparrow", "starling", "stork", "swam", "turkey", "woodpecker"],
        attributes: ["feathers", "beak", "hollow bones"],
        sound: ["chirp", "squawk"],
        tactile: ["soft feathers", "smooth feathers", "hard beak"],
        actions: ["walk", "hop", "fly", "chirp", "squawk", "build nest", "mate", "hunt worms", "eat worms", "feed offspring", "migrate"],
        associations: ["sky", "tree", "worms", "grass", "chirping", "flying thing"]
    },
    {
        keyword: "robin",
        aliases: ["robins"],
        root: ["bird"],
        related: ["worm", "spring", "morning"],
        colors: ["warm rust", "reddish-orange breast", "grayish-brown back", "dark head", "dark tail"],
        attributes: ["red breast", "fragile talons", "skittish", "beautiful song"],
        actions: ["hop", "hunt worms", "eat worms", "fly", "land", "take off quickly"],
        associations: ["spring", "morning", "worm", "bird", "tree"]
    },
    {
        keyword: "worm",
        aliases: ["worms"],
        root: ["invertebrate", "animal"],
        category: "invertebrate",
        related: ["robin", "dirt", "rain"],
        attributes: ["soft", "blind", "live in dirt"],
        associations: ["dirt", "robin", "rain"]
    }
];

// 2. THE NEURAL INDEX (Object of Pointers)
// This starts empty. It will only store the word and the index number.
let cortexIndex = {};

// 3. THE BUILDER FUNCTION
// We run this once when the vessel boots up to wire the brain together.
function buildNeuralIndex() 
{
    // Clear the index in case we are rebuilding it
    cortexIndex = {}; 

    // Traditional high-speed loop through the memory timeline
    for (let i = 0; i < cortexMemory.length; i++) 
    {
        let memoryNode = cortexMemory[i];
        
        // Map the primary keyword to its array index (e.g., cortexIndex["bird"] = 0)
        cortexIndex[memoryNode.keyword] = i;

        // Map all aliases to the exact same array index!
        if (memoryNode.aliases !== undefined) 
        {
            for (let j = 0; j < memoryNode.aliases.length; j++) 
            {
                let aliasWord = memoryNode.aliases[j];
                cortexIndex[aliasWord] = i;
            }
        }
    }
    console.log("Neural Index Built Successfully.");
}

// 4. MEMORY RECALL (O(1) Instant Retrieval)
// This is how the being "thinks" about a specific word instantly.
function recallConcept(word) 
{
    // Check our index for the word
    let targetIndex = cortexIndex[word];
    
    // If the index exists, we grab the physical memory from the Array instantly!
    if (targetIndex !== undefined) 
    {
        return cortexMemory[targetIndex];
    } 
    else 
    {
        return null; // The vessel does not know this concept yet
    }
}

// 5. ASSIMILATING NEW MEMORIES (Learning)
function learnNewConcept(newMemoryObject) 
{
    // Push the new memory to the end of the timeline
    cortexMemory.push(newMemoryObject);
    
    // Update the index so we can find it instantly next time
    let newIndex = cortexMemory.length - 1;
    cortexIndex[newMemoryObject.keyword] = newIndex;
    
    if (newMemoryObject.aliases !== undefined) 
    {
        for (let j = 0; j < newMemoryObject.aliases.length; j++) 
        {
            let aliasWord = newMemoryObject.aliases[j];
            cortexIndex[aliasWord] = newIndex;
        }
    }
}

// === ENGINE START ===

buildNeuralIndex();

// The vessel hears the word "robins"...
let thought = recallConcept("robins");

if (thought !== null) 
{
    console.log("Concept Found: " + thought.keyword);
    console.log("Associated with: " + thought.associations.join(", "));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

