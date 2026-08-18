// cortex.js

let cortex =
{
    bird: {
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

    birds: 'bird',
    birdie: 'bird',

    //----//

    robin: {
        root: "bird",
        related: ["worm", "spring", "morning"],
        colors: ["warm rust", "reddish-orange breast", "grayish-brown back", "dark head", "dark tail"],
        attributes: ["red breast", "fragile talons", "skittish", "beautiful song"],
        actions: ["hop", "hunt worms", "eat worms", "fly", "land", "take off quickly"],
        associations: ["spring", "morning", "worm", "bird", "tree"]
    },

    robins: 'robin',

    //----//

    "blue jay": {
        root: "bird",

        attributes: ["blue breast", "fragile talons", "aggressive", "harsh song"],

        actions: ["hop", "hunt worms", "fly", "take off quickly"],

        associations: ["spring", "morning", "worm", "bird", "tree"]
    },

    "blue jays": 'blue jay',

    //----//

    worm: {
        root: ["invertebrate", "animal"],
        category: 'invertebrate',
        related: ["robin", "dirt", "rain"],
        attributes: ["soft", "blind", "live in dirt"],
        associations: ["dirt", "robin", "rain"]
    },

    worms: 'worm',

    //----//

    tree: {
        root: ["plant", "flora", "organism"],
        category: "plant",
        attributes: ["tall", "leaves", "rough bark", "deep roots"],
        actions: ["grow", "sway in wind", "drop leaves"],
        associations: ["bird", "sky", "earth", "robin"]
    },

    trees: 'tree',

    //----//

    dog:
    {
        root: ['animal', 'vertebrate'],

        category: ['animal', 'pets', 'domesticated'],

        attributes: ['furry', 'fast', 'strong', 'loud', 'friendly', 'happy'],

        negative_attributes: ['mean', 'aggressive', 'violent'],
    
        actions: ['walk', 'run', 'sit', 'lie down', 'bark', 'bite', 'jump'],
    
        associations: ['houses', 'people', 'veterinarian', 'pet food'] 
    },

    dogs: 'dog',
    doggie: 'dog',

    //----//

    the: {
        root: ['specifier'],
        attributes: ['refers to one item', 'refers to one concept'],
        associations: ['a']
    }
};

//----//

// INPUT

// input
let sentence = "Birds are beautiful creatures. They live in the trees and they fly in the sky. I like birds very much.";

//----//

// turn input into an array of words
let sentenceArray = sentence.split(' ');

//----//

// loop through every word in the array
for (let x = 0; x < sentenceArray.length; x++)
{
    // Clean the word: lowercase it and strip out basic punctuation
    let word = sentenceArray[x].toLowerCase().replace(/[.,!?]/g, "");

    // Is the word in our cortex? (O(1) instant memory lookup)
    if (cortex.hasOwnProperty(word)) 
    {
        // Grab the memory
        let memory = cortex[word];

        // SYNAPSE CHECK: Is this just a pointer to another word?
        if (typeof memory === 'string') 
        {
            console.log(`⚡ Synapse fired: [${word}] redirecting to [${memory}]`);
            // Follow the pointer to the real concept
            word = memory; 
            memory = cortex[word]; 
        }

        // Output the deep memory
        console.log(`🧠 Concept activated: ${word}`);
        console.log(`   Associations: ${memory.associations.join(", ")}\n`);
    }
}

/*
⚡ Synapse fired: [birds] redirecting to [bird] 
🧠 Concept activated: bird 
   Associations: sky, tree, worms, grass, chirping, flying thing

🧠 Concept activated: the 
   Associations: a

⚡ Synapse fired: [trees] redirecting to [tree] 
🧠 Concept activated: tree
   Associations: bird, sky, earth, robin

🧠 Concept activated: the 
   Associations: a

⚡ Synapse fired: [birds] redirecting to [bird] 
🧠 Concept activated: bird 
   Associations: sky, tree, worms, grass, chirping, flying thing
*/

/*
// The array is like this:
Array(20) [ "Birds", "are", "beautiful", "creatures.", "They", "live", "in", "the", "trees", "and", … ]
0: "Birds"
1: "are"
2: "beautiful"
3: "creatures."
4: "They"
5: "live"
6: "in"
7: "the"
8: "trees"
9: "and"
10: "they"
11: "fly"
12: "in"
13: "the"
14: "sky."
15: "I"
16: "like"
17: "birds"
18: "very"
19: "much."
length: 20
<prototype>: Array []
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

