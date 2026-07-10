// cortex.js

// 1. THE LOGIC GATES
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

// --------------------------------------------------
// 2. THE HYBRID CORTEX (Explicit Arrays with Index 0 Root)
// Index [0] is the Identity (Is-A). 
// The rest is pure redundant sensory memory.
// --------------------------------------------------
let cortex = {
    // --- FOUNDATIONS ---
    "dog": ["animal", "mammal", "canine", "pet", "bark", "fur", "loyal", "teeth", "tail", "snout", "runs fast", "four legs"],
    
    // --- DESCENDANTS (Index 0 is the Root) ---
    "puppy": ["dog", "animal", "mammal", "canine", "pet", "bark", "fur", "young", "playful", "small", "learning"],
    
    "pitbull": ["dog", "animal", "mammal", "canine", "pet", "bark", "fur", "teeth", "tail", "four legs", "danger", "strong", "guard", "muscular"],
    
    "golden retriever": ["dog", "animal", "mammal", "canine", "pet", "bark", "fur", "teeth", "tail", "four legs", "friendly", "water", "fetch", "gentle"],
    
    "cat": ["feline", "animal", "mammal", "pet", "meow", "fur", "independent", "claws", "tail", "four legs"],
    
    "bird": ["animal", "organism", "warm-blooded", "feathers", "beak", "lays eggs", "wings", "flies", "sky", "two legs", "chirp"],
    
    "airplane": ["machine", "vehicle", "aircraft", "metal", "jet fuel", "runway", "passengers", "wings", "flies", "sky", "heavy"],
    
    "rock": ["mineral", "matter", "hard", "heavy", "inanimate", "solid", "natural", "ground"]
};

// --------------------------------------------------
// 3. THE RESONANCE ENGINE
// --------------------------------------------------
function checkProximity(wordA, wordB)
{
    if (cortex[wordA] === undefined || cortex[wordB] === undefined)
    {
        console.log("Error: Missing concept in Cortex.");
        return;
    }

    let arrayA = cortex[wordA];
    let arrayB = cortex[wordB];

    console.log("--- Semantic Proximity Scan ---");
    console.log("Comparing [" + wordA + "] to [" + wordB + "]");

    // --- PHASE 1: THE ROOT OVERRIDE ---
    // If either word claims the other as its exact root, we bypass counting.
    if (arrayA[0] === wordB)
    {
        console.log("IDENTITY MATCH: [" + wordA + "] IS A [" + wordB + "]");
        console.log("Resonance Score: 100%");
        console.log("-------------------------------\n");
        return;
    }
    if (arrayB[0] === wordA)
    {
        console.log("IDENTITY MATCH: [" + wordB + "] IS A [" + wordA + "]");
        console.log("Resonance Score: 100%");
        console.log("-------------------------------\n");
        return;
    }

    // --- PHASE 2: REDUNDANT TRAIT COUNTING ---
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

    // Use the smallest array for the denominator to catch subsets!
    let smallestLength = Math.min(arrayA.length, arrayB.length);
    let resonance = Math.floor((matchCount / smallestLength) * 100);

    console.log("CROSS-REFERENCE MATCH:");
    console.log("Resonance Score: " + resonance + "%");
    console.log("-------------------------------\n");
}

// --------------------------------------------------
// 4. SYSTEM INITIALIZATION & TESTS
// --------------------------------------------------
function systemBoot()
{
    console.log("System Booting... Hybrid OoA Paradigm Active.\n");

    // Test 1: Root Override (Should hit 100% instantly)
    checkProximity("puppy", "dog"); 

    // Test 2: Siblings (Should give a highly accurate overlap score)
    checkProximity("golden retriever", "pitbull"); 

    // Test 3: Cross-Branch Anomaly (Shares "wings", "flies", "sky")
    checkProximity("airplane", "bird"); 

    // Test 4: Completely Unrelated
    checkProximity("rock", "dog");  
}

systemBoot();

/*
System Booting... Hybrid OoA Paradigm Active.

--- Semantic Proximity Scan ---
Comparing [puppy] to [dog]
IDENTITY MATCH: [puppy] IS A [dog]
Resonance Score: 100%
-------------------------------

--- Semantic Proximity Scan ---
Comparing [golden retriever] to [pitbull]
CROSS-REFERENCE MATCH:
Resonance Score: 71%
-------------------------------

--- Semantic Proximity Scan ---
Comparing [airplane] to [bird]
CROSS-REFERENCE MATCH:
Resonance Score: 27%
-------------------------------

--- Semantic Proximity Scan ---
Comparing [rock] to [dog]
CROSS-REFERENCE MATCH:
Resonance Score: 0%
-------------------------------
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

