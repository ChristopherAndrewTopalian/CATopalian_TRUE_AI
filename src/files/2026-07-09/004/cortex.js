// cortex.js

// THE LOGIC GATES

// We use the AND gate concept here: Both A and B must share the trait to return 1.
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
// A flat dictionary mapping concepts to their associative tags.

let cortex = {
    "dog": ["canine", "mammal", "pet", "bark", "fur", "loyal", "teeth", "lassie", "fido", "german shepherd",  "labrador retriever", "golden retriever", "english springer Spaniel", "hunting dog", "hound", "good sense of smell", "tail", "snout", "runs fast", "plays catch", "plays frisbee", "whiskers"],

    "puppy": ["canine", "mammal", "pet", "bark", "fur", "young", "playful"],

    "pup": ["canine", "mammal", "pet", "bark", "young"],

    "cat": ["feline", "mammal", "pet", "meow", "fur", "independent", "claws"],

    "pitbull": ["danger", "strong", "canine", "mammal", "pet", "bark", "teeth"],

    "rock": ["mineral", "hard", "inanimate", "heavy"]
};

// THE RESONANCE ENGINE

function checkProximity(wordA, wordB)
{
    // Safety Check: Make sure both words actually exist in the Cortex first!
    if (cortex[wordA] === undefined || cortex[wordB] === undefined)
    {
        console.log("Error: One of these concepts is not in the Cortex yet.");
        return;
    }

    // Grab the flat arrays for both words
    let arrayA = cortex[wordA];
    let arrayB = cortex[wordB];

    let matchCount = 0;

    // Loop through the first word's array...
    for (let i = 0; i < arrayA.length; i++)
    {
        let currentTrait = arrayA[i]; // e.g., "canine"

        // We set signal A to 1 because we know word A has this trait
        let signalA = 1; 

        // We set signal B to 1 if word B's array includes this exact trait
        let signalB = arrayB.includes(currentTrait) ? 1 : 0; 

        // We run it through the strict AND gate
        if (and(signalA, signalB) === 1) 
        {
            matchCount++;
        }
    }

    // We find the smallest array and use that as the denominator
    let smallestLength = Math.min(arrayA.length, arrayB.length);

    let resonance = (matchCount / smallestLength) * 100;

    // We use Math.floor to chop off messy decimals and keep it clean
    let finalScore = Math.floor(resonance);

    console.log("--- Semantic Proximity Scan ---");
    console.log("Comparing [" + wordA + "] to [" + wordB + "]");
    console.log("Resonance Score: " + finalScore + "%");
    console.log("-------------------------------\n");
}

// SYSTEM INITIALIZATION & TESTS

function systemBoot()
{
    console.log("System Booting... Object of Arrays (OoA) Paradigm Active.\n");

    // Test 1: Highly Related
    checkProximity("puppy", "dog"); 

    // Test 2: Slightly Related (Both are pets/mammals)
    checkProximity("dog", "cat");   

    // Test 3: Completely Unrelated
    checkProximity("dog", "rock");  

    // Test 4: Finding the danger traits
    checkProximity("pitbull", "dog");
}

// Run the engine
systemBoot();

//----//

/*
System Booting... Object of Arrays (OoA) Paradigm Active.
--- Semantic Proximity Scan ---
Comparing [puppy] to [dog]
Resonance Score: 71%
-------------------------------
--- Semantic Proximity Scan ---
Comparing [dog] to [cat]
Resonance Score: 42%
-------------------------------
--- Semantic Proximity Scan ---
Comparing [dog] to [rock] 
Resonance Score: 0% 
-------------------------------
--- Semantic Proximity Scan ---
Comparing [pitbull] to [dog] 
Resonance Score: 71%
-------------------------------
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

