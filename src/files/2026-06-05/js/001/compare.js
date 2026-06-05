// compare.js

let lexicon = {
    yes: [0, 1, 0, 1, 1, 0, 1], // example only
    no: [1, 0, 0, 1, 1, 1, 1], // example only
}

function compare(thoughtA, thoughtB)
{
    if (thoughtA.length !== thoughtB.length) {
        throw new Error("Thoughts must have same length");
    }

    let hammingDistance = 0;

    for (let i = 0; i < thoughtA.length; i++)
    {
        if (thoughtA[i] !== thoughtB[i])
        {
            hammingDistance++;
        }
    }

    const similarity = 1 - (hammingDistance / thoughtA.length);

    return {
    hammingDistance,
    similarity,  // 0.0 = opposite, 1.0 = identical
    similarityPct: Math.round(similarity * 100),
    identical: hammingDistance === 0,
    opposite: hammingDistance === thoughtA.length
    };
}

console.log(compare(lexicon.yes, lexicon.no));

/*
Object { hammingDistance: 3, similarity: 0.5714285714285714, similarityPct: 57, identical: false, opposite: false }
​
hammingDistance: 3
​
identical: false
​
opposite: false
​
similarity: 0.5714285714285714
​
similarityPct: 57
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

