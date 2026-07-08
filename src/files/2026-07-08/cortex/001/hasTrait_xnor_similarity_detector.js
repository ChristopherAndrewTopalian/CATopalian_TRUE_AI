// hasTrait_xnor_similarity_detector.js

// A helper function to check if an entity has a specific trait in its array
function hasTrait(entityId, traitName)
{
    // If the entity exists AND the trait is in its attributes array, return 1. Else 0.
    if (cortex[entityId] && cortex[entityId].attributes.includes(traitName)) {
        return 1;
    }
    return 0;
}

// Grab our test subjects
let birdA = 'robin';
let birdB = 'blue jay';

// We test for a trait neither of them has (e.g., "deep roots", which belongs to trees)
let traitA = hasTrait(birdA, 'deep roots'); // Returns 0
let traitB = hasTrait(birdB, 'deep roots'); // Returns 0

// We run the data through your semantic logic gate
let similarityScore = xnor(traitA, traitB); 

console.log("Similarity Score for Deep Roots: " + similarityScore); 
// Output: 1 (Because sharing an absence is a similarity!)

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

