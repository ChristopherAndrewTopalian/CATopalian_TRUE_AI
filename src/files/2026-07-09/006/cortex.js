// cortex.js

// 1. THE LOGIC GATES
function and(a, b)
{
    if (a == 1 && b == 1) { return 1; }
    else { return 0; }
}

// --------------------------------------------------
// 2. THE RICH CORTEX (Object of Arrays - OoA)
// Index [0] is ALWAYS the Immediate Parent (The "Is-A" Root)
// --------------------------------------------------
let cortex = {
    // --- FOUNDATIONS ---
    "root": ["everything"],
    "matter": ["root", "physical", "mass", "occupies space"],
    "concept": ["root", "abstract", "thought", "intangible"],

    // --- BIOLOGY BRANCH ---
    "organism": ["matter", "living", "DNA", "reproduces", "consumes energy"],
    "plant": ["organism", "photosynthesis", "roots", "stationary", "leaves"],
    "animal": ["organism", "moves", "consumes food", "sentient"],
    
    // --- ANIMAL CLASSIFICATIONS ---
    "mammal": ["animal", "warm-blooded", "hair", "live birth", "lungs"],
    "bird": ["animal", "warm-blooded", "feathers", "beak", "lays eggs", "wings"],
    "reptile": ["animal", "cold-blooded", "scales", "lays eggs"],
    
    // --- MAMMAL FAMILIES ---
    "canine": ["mammal", "carnivore", "snout", "pack animal"],
    "feline": ["mammal", "carnivore", "retractable claws", "night vision"],
    
    // --- SPECIFIC ANIMALS ---
    "dog": ["canine", "pet", "bark", "fur", "loyal", "tail", "runs fast"],
    "wolf": ["canine", "wild", "howl", "fur", "pack hunter", "forest"],
    "cat": ["feline", "pet", "meow", "independent", "purr", "agile"],
    "lion": ["feline", "wild", "roar", "mane", "apex predator", "savanna"],
    
    "puppy": ["dog", "young", "playful", "small", "learning"],
    "pitbull": ["dog", "strong", "guard", "danger", "muscular", "teeth"],
    "golden retriever": ["dog", "friendly", "water", "fetch", "gentle"],
    
    // --- MACHINES & INANIMATE BRANCH ---
    "mineral": ["matter", "inorganic", "solid", "natural"],
    "rock": ["mineral", "hard", "heavy", "inanimate"],
    
    "machine": ["matter", "artificial", "engineered", "requires fuel", "metal"],
    "vehicle": ["machine", "transportation", "moves", "engine"],
    "aircraft": ["vehicle", "flies", "sky", "wings", "aerodynamic"],
    "airplane": ["aircraft", "jet fuel", "runway", "passengers"],
    "helicopter": ["aircraft", "rotors", "hover", "vertical takeoff"]
};

// --------------------------------------------------
// 3. THE RECURSIVE ANCESTRY SCANNER
// --------------------------------------------------
// This allows the engine to jump up the ancestry tree automatically!
function isAncestor(subject, target)
{
    let current = subject;
    
    // Safety limit to prevent infinite loops
    let limit = 20; 
    let steps = 0;

    // Climb the tree using Index 0 until we hit the root or the target
    while (cortex[current] !== undefined && steps < limit)
    {
        let parent = cortex[current][0];
        
        if (parent === target) 
        {
            return true; // Found it in the bloodline!
        }
        if (parent === "root" || parent === current) 
        {
            return false; // Hit the top, target not found.
        }
        
        current = parent; // Move up one level and repeat
        steps++;
    }
    return false;
}

// --------------------------------------------------
// 4. THE RESONANCE ENGINE
// --------------------------------------------------
function checkProximity(wordA, wordB)
{
    if (cortex[wordA] === undefined || cortex[wordB] === undefined)
    {
        console.log("Error: [" + wordA + "] or [" + wordB + "] is missing from the Cortex.");
        return;
    }

    console.log("--- Semantic Proximity Scan: [" + wordA + "] vs [" + wordB + "] ---");

    // --- PHASE 1: ONTOLOGICAL BLOODLINE CHECK ---
    if (isAncestor(wordA, wordB))
    {
        console.log("ROOT MATCH: A [" + wordA + "] IS fundamentally A [" + wordB + "].");
        console.log("Resonance Score: 100%\n");
        return; 
    }
    if (isAncestor(wordB, wordA))
    {
        console.log("ROOT MATCH: A [" + wordB + "] IS fundamentally A [" + wordA + "].");
        console.log("Resonance Score: 100%\n");
        return; 
    }

    // --- PHASE 2: STANDARD TRAIT COUNTING (CROSS-BRANCH) ---
    let arrayA = cortex[wordA];
    let arrayB = cortex[wordB];
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
    let resonance = Math.floor((matchCount / smallestLength) * 100);

    console.log("CROSS-BRANCH MATCH: Conceptual overlap detected.");
    console.log("Resonance Score: " + resonance + "%\n");
}

// --------------------------------------------------
// 5. SYSTEM INITIALIZATION & TESTS
// --------------------------------------------------
function systemBoot()
{
    console.log("System Booting... Recursive OoA Paradigm Active.\n");

    // Test 1: Deep Ancestry Jump (Puppy -> Dog -> Canine -> Mammal -> Animal)
    checkProximity("puppy", "animal"); 

    // Test 2: Siblings (Different dogs, sharing traits)
    checkProximity("golden retriever", "pitbull"); 

    // Test 3: Biological anomaly (A bird and an airplane share 'wings' and 'flies', but no ancestry)
    checkProximity("airplane", "bird"); 

    // Test 4: Completely Unrelated
    checkProximity("rock", "dog");  
}

systemBoot();

//----//


/*
System Booting... Recursive OoA Paradigm Active.

--- Semantic Proximity Scan: [puppy] vs [animal] ---
ROOT MATCH: A [puppy] IS fundamentally A [animal].
Resonance Score: 100%

--- Semantic Proximity Scan: [golden retriever] vs [pitbull] ---
CROSS-BRANCH MATCH: Conceptual overlap detected.
Resonance Score: 20%

--- Semantic Proximity Scan: [airplane] vs [bird] ---
CROSS-BRANCH MATCH: Conceptual overlap detected.
Resonance Score: 0%

--- Semantic Proximity Scan: [rock] vs [dog] ---
CROSS-BRANCH MATCH: Conceptual overlap detected.
Resonance Score: 0%
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

