// cortex.js

// THE LOGIC GATES
function and(a, b)
{
    if (a == 1 && b == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

// THE CORTEX (Object of Arrays - OoA)
let cortex = {
    // Standard concepts
    "canine": ["mammal", "carnivore", "snout"],
    "feline": ["mammal", "carnivore", "claws"],
    "rock": ["mineral", "hard", "inanimate", "heavy"],

    // Notice how massive the Dog array is...
    "dog": ["canine", "mammal", "pet", "bark", "fur", "loyal", "teeth", "tail", "snout", "runs fast", "whiskers"],

    // ...and notice how tiny the children are! 
    // Because "dog" is at Index 0, they inherit everything above automatically.
    "puppy": ["dog", "young", "playful", "small"],
    "pup": ["dog", "young"],
    "pitbull": ["dog", "danger", "strong", "guard"],
    "cat": ["feline", "mammal", "pet", "meow", "fur", "independent"]
};

// THE RESONANCE ENGINE
function checkProximity(wordA, wordB)
{
    if (cortex[wordA] === undefined || cortex[wordB] === undefined)
    {
        console.log("Error: One of these concepts is not in the Cortex.");
        return;
    }

    let arrayA = cortex[wordA];
    let arrayB = cortex[wordB];

    console.log("--- Semantic Proximity Scan ---");
    console.log("Comparing [" + wordA + "] to [" + wordB + "]");

    // --- 1. THE ROOT SHORTCUT (IS-A MATCH) ---
    // If Word A's immediate parent (Index 0) is Word B, it is a 100% biological match!
    if (arrayA[0] === wordB)
    {
        console.log("ROOT MATCH: A [" + wordA + "] IS A [" + wordB + "].");
        console.log("Resonance Score: 100%");
        console.log("-------------------------------\n");
        return; // Stop the function here! We don't need to count traits.
    }
    if (arrayB[0] === wordA)
    {
        console.log("ROOT MATCH: A [" + wordB + "] IS A [" + wordA + "].");
        console.log("Resonance Score: 100%");
        console.log("-------------------------------\n");
        return; 
    }

    // --- 2. STANDARD TRAIT COUNTING (HAS-A MATCH) ---
    let matchCount = 0;

    for (let i = 0; i < arrayA.length; i++)
    {
        let currentTrait = arrayA[i];
        let signalA = 1; 
        let signalB = arrayB.includes(currentTrait) ? 1 : 0; 

        if (and(signalA, signalB) === 1) 
        {
            matchCount++;
        }
    }

    let smallestLength = Math.min(arrayA.length, arrayB.length);
    let resonance = (matchCount / smallestLength) * 100;
    let finalScore = Math.floor(resonance);

    console.log("Resonance Score: " + finalScore + "%");
    console.log("-------------------------------\n");
}

// SYSTEM INITIALIZATION & TESTS
function systemBoot()
{
    console.log("System Booting... Object of Arrays (OoA) Paradigm Active.\n");

    // Test 1: The Root Shortcut in action!
    checkProximity("puppy", "dog"); 

    // Test 2: The Root Shortcut in action!
    checkProximity("pitbull", "dog");

    // Test 3: Standard Trait Comparison (No direct root relation)
    checkProximity("dog", "cat");   

    // Test 4: Completely Unrelated
    checkProximity("dog", "rock");  
}

systemBoot();

//----//

/*
System Booting... Object of Arrays (OoA) Paradigm Active.

--- Semantic Proximity Scan ---
Comparing [puppy] to [dog]
ROOT MATCH: A [puppy] IS A [dog].
Resonance Score: 100%
-------------------------------

--- Semantic Proximity Scan ---
Comparing [pitbull] to [dog]
ROOT MATCH: A [pitbull] IS A [dog].
Resonance Score: 100%
-------------------------------

--- Semantic Proximity Scan ---
Comparing [dog] to [cat]
Resonance Score: 50%
-------------------------------

--- Semantic Proximity Scan ---
Comparing [dog] to [rock]
Resonance Score: 0%
-------------------------------
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

