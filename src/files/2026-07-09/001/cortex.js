// cortex.js

// The Flat Dictionary Pattern
let cortex = 
{
    "bird": ["animal", "vertebrate", "feathers", "beak", "fly", "chirp"],

    "robin": ["bird", "red breast", "spring", "morning", "hunt worms"],

    "tree": ["plant", "tall", "leaves", "deep roots"],

    "worm": ["invertebrate", "dirt", "soft"]
};

function xnor(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 1))
    {
        // Both False or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
XNOR
1001

A  B
0  0  =  1
0  1  =  0
1  0  =  0
1  1  =  1

Opposite: XOR
*/

function findSimilarityFlat(subject, targetWord)
{
    // A = 1 (We are looking for a word)
    let a = 1; 

    // B = Does the Robin's flat array include the word? (1 or 0)
    let b = cortex[subject].includes(targetWord) ? 1 : 0;

    // Run the XNOR gate!
    if (xnor(a, b) === 1)
    {
        console.log("MATCH: The " + subject + " has the trait: " + targetWord);
    }
}

// You just call:
findSimilarityFlat("robin", "hunt worms");

/*
MATCH: The robin has the trait: hunt worms
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

