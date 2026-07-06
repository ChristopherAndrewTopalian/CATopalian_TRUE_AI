// cortex.js

let cortex =
{
    bird:
    {
        root: null,

        aka: ["birds", "birdie", "avian"],

        category: ["animal", "life", "ave", "creature", "being", "vertebrate"],

        types: ["blackbird", "blue jay", "bluebird", "canary", "chicken", "crane", "crow", "eagle", "falcon", "hawk", "hummingbird", "Owl", "parrot", "pelican", "penguin", "robin", "sparrow", "starling", "stork", "swam", "turkey", "woodpecker"],
    
        attributes: ["feathers", "beak", "hollow bones"],

        sound: ["chirp", "squawk"],

        tactile: ["soft feathers", "smooth feathers", "hard beak"],

        actions: ["walk", "hop", "fly", "chirp", "squawk", "build nest", "mate", "hunt worms", "eat worms", "feed offspring", "migrate"],

        associations: ["sky", "tree", "worms", "grass", "chirping", "flying thing"]
    },

    robin:
    {
        root: "bird",
        related: ["worm", "spring", "morning"],
        colors: ["warm rust", "reddish-orange breast", "grayish-brown back", "dark head", "dark tail"],
        attributes: ["red breast", "fragile talons", "skittish", "beautiful song"],
        actions: ["hop", "hunt worms", "eat worms", "fly", "land", "take off quickly"],
        associations: ["spring", "morning", "worm", "bird", "tree"]
    },

    blue jay: 
    {
        root: "bird",
        attributes: ["blue breast", "fragile talons", "aggressive", "harsh song"],
        actions: ["hop", "hunt worms", "fly", "take off quickly"],
        associations: ["spring", "morning", "worm", "bird", "tree"]
    },

    worm:
    {
        root: null,
        category: 'invertebrate',
        related: ["robin", "dirt", "rain"],
        attributes: ["soft", "blind", "live in dirt"],
        associations: ["dirt", "robin", "rain"]
    },

    tree:
    {
        category: "plant",
        attributes: ["tall", "leaves", "rough bark", "deep roots"],
        actions: ["grow", "sway in wind", "drop leaves"],
        associations: ["bird", "sky", "earth", "robin"]
    }
};

/*
// Lookup instant, no scanning
console.log(cortex.bird.related);
// ["robin", "eagle", "hawk", "crow", "blue jay"]
*/

// What are some examples of a bird"; just take the first few, no math beyond counting:
// console.log(cortex.bird.related.slice(0, 5));

//----//

//Adding a new concept — no index needed, just names:
//cortex.bird.related.push("cardinal");     // bird now recalls cardinal too

//cortex.cardinal = {
    root: "bird",
    related: ["red", "winter", "bird feeder"]
//};

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian


