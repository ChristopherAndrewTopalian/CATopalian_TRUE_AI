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
    },

    //----//

    that: {
        root: ['specifier'],
        attributes: ['refers to one item', 'refers to one concept'],
        associations: ['the', 'a']
    },

    //----//

    house: {
        root: ['home', 'dwelling', 'shelter'],
        attributes: ['where a person lives'],
        associations: ['home']
    },

    houses: 'house',

    //----//
};

//----//

// INPUT

// input
let sentence = "Birds are beautiful creatures. They live in the trees and they fly in the sky. I like birds very much. Dogs are nice too. A bird and a dog can in fact be friends. Did you know that? Also, I wanted to ask you if you like houses with more than five rooms or do you prefer a home with less rooms?";

//----//

// turn input into an array of words
let sentenceArray = sentence.split(' ');

//----//

// array to hold recognized words
//let recognizedWords = [];
let recognizedWords = {};

let unknownWords = {};

for (let x = 0; x < sentenceArray.length; x++)
{
    let word = sentenceArray[x].toLowerCase().replace(/[.,!?]/g, "");

    // Is the word NOT in our cortex?
    if (!cortex.hasOwnProperty(word)) 
    {
        // Have we already flagged this unknown word in this session?
        if (unknownWords.hasOwnProperty(word))
        {
            // Increase the hit counter
            unknownWords[word].timesHeard++;
        }
        else
        {
            // Create a brand new "Empty Box" for this unknown concept
            unknownWords[word] = {
                status: "unknown",
                timesHeard: 1,
                // In the future, the engine could automatically guess these based on context!
                guessedCategory: null 
            };
        }
    }
    else // The word IS in our cortex
    {
        let memory = cortex[word];

        if (typeof memory === 'string') 
        {
            console.log('⚡ Synapse fired: [' + word + '] redirecting to [' + memory + ']');

            word = memory; 
            memory = cortex[word]; 
        }

        recognizedWords[word] = memory;

        // Output the deep memory
        console.log('🧠 Concept activated: ' + word);

        console.log('   Associations: ' + memory.associations.join(", ") + '\n');

        console.log('   Attributes: ' + memory.attributes.join(", ") + '\n');

        console.log('--------------------');
    }
}

console.log(JSON.stringify(recognizedWords, null, 2));

console.log('----');

console.log(JSON.stringify(unknownWords, null, 2));

//----//

/*
⚡ Synapse fired: [birds] redirecting to [bird]
🧠 Concept activated: bird
   Associations: sky, tree, worms, grass, chirping, flying thing

   Attributes: feathers, beak, hollow bones

--------------------
🧠 Concept activated: the
   Associations: a

   Attributes: refers to one item, refers to one concept

--------------------
⚡ Synapse fired: [trees] redirecting to [tree]
🧠 Concept activated: tree
   Associations: bird, sky, earth, robin

   Attributes: tall, leaves, rough bark, deep roots

--------------------
🧠 Concept activated: the
   Associations: a

   Attributes: refers to one item, refers to one concept

--------------------
⚡ Synapse fired: [birds] redirecting to [bird]
🧠 Concept activated: bird
   Associations: sky, tree, worms, grass, chirping, flying thing

   Attributes: feathers, beak, hollow bones

--------------------
⚡ Synapse fired: [dogs] redirecting to [dog]
🧠 Concept activated: dog
   Associations: houses, people, veterinarian, pet food

   Attributes: furry, fast, strong, loud, friendly, happy

--------------------
🧠 Concept activated: bird
   Associations: sky, tree, worms, grass, chirping, flying thing

   Attributes: feathers, beak, hollow bones

--------------------
🧠 Concept activated: dog
   Associations: houses, people, veterinarian, pet food

   Attributes: furry, fast, strong, loud, friendly, happy

--------------------
🧠 Concept activated: that
   Associations: the, a

   Attributes: refers to one item, refers to one concept

--------------------
⚡ Synapse fired: [houses] redirecting to [house]
🧠 Concept activated: house
   Associations: home

   Attributes: where a person lives

--------------------
{
  "bird": {
    "root": [
      "animal",
      "vertebrates"
    ],
    "aka": [
      "birds",
      "birdie",
      "avian"
    ],
    "category": [
      "animal",
      "life",
      "ave",
      "creature",
      "being",
      "vertebrate"
    ],
    "types": [
      "blackbird",
      "blue jay",
      "bluebird",
      "canary",
      "chicken",
      "crane",
      "crow",
      "eagle",
      "falcon",
      "hawk",
      "hummingbird",
      "Owl",
      "parrot",
      "pelican",
      "penguin",
      "robin",
      "sparrow",
      "starling",
      "stork",
      "swam",
      "turkey",
      "woodpecker"
    ],
    "attributes": [
      "feathers",
      "beak",
      "hollow bones"
    ],
    "sound": [
      "chirp",
      "squawk"
    ],
    "tactile": [
      "soft feathers",
      "smooth feathers",
      "hard beak"
    ],
    "actions": [
      "walk",
      "hop",
      "fly",
      "chirp",
      "squawk",
      "build nest",
      "mate",
      "hunt worms",
      "eat worms",
      "feed offspring",
      "migrate"
    ],
    "associations": [
      "sky",
      "tree",
      "worms",
      "grass",
      "chirping",
      "flying thing"
    ]
  },
  "the": {
    "root": [
      "specifier"
    ],
    "attributes": [
      "refers to one item",
      "refers to one concept"
    ],
    "associations": [
      "a"
    ]
  },
  "tree": {
    "root": [
      "plant",
      "flora",
      "organism"
    ],
    "category": "plant",
    "attributes": [
      "tall",
      "leaves",
      "rough bark",
      "deep roots"
    ],
    "actions": [
      "grow",
      "sway in wind",
      "drop leaves"
    ],
    "associations": [
      "bird",
      "sky",
      "earth",
      "robin"
    ]
  },
  "dog": {
    "root": [
      "animal",
      "vertebrate"
    ],
    "category": [
      "animal",
      "pets",
      "domesticated"
    ],
    "attributes": [
      "furry",
      "fast",
      "strong",
      "loud",
      "friendly",
      "happy"
    ],
    "negative_attributes": [
      "mean",
      "aggressive",
      "violent"
    ],
    "actions": [
      "walk",
      "run",
      "sit",
      "lie down",
      "bark",
      "bite",
      "jump"
    ],
    "associations": [
      "houses",
      "people",
      "veterinarian",
      "pet food"
    ]
  },
  "that": {
    "root": [
      "specifier"
    ],
    "attributes": [
      "refers to one item",
      "refers to one concept"
    ],
    "associations": [
      "the",
      "a"
    ]
  },
  "house": {
    "root": [
      "home",
      "dwelling",
      "shelter"
    ],
    "attributes": [
      "where a person lives"
    ],
    "associations": [
      "home"
    ]
  }
}
----
{
  "are": {
    "status": "unknown",
    "timesHeard": 2,
    "guessedCategory": null
  },
  "beautiful": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "creatures": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "they": {
    "status": "unknown",
    "timesHeard": 2,
    "guessedCategory": null
  },
  "live": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "in": {
    "status": "unknown",
    "timesHeard": 3,
    "guessedCategory": null
  },
  "and": {
    "status": "unknown",
    "timesHeard": 2,
    "guessedCategory": null
  },
  "fly": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "sky": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "i": {
    "status": "unknown",
    "timesHeard": 2,
    "guessedCategory": null
  },
  "like": {
    "status": "unknown",
    "timesHeard": 2,
    "guessedCategory": null
  },
  "very": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "much": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "nice": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "too": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "a": {
    "status": "unknown",
    "timesHeard": 3,
    "guessedCategory": null
  },
  "can": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "fact": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "be": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "friends": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "did": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "you": {
    "status": "unknown",
    "timesHeard": 4,
    "guessedCategory": null
  },
  "know": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "also": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "wanted": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "to": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "ask": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "if": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "with": {
    "status": "unknown",
    "timesHeard": 2,
    "guessedCategory": null
  },
  "more": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "than": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "five": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "rooms": {
    "status": "unknown",
    "timesHeard": 2,
    "guessedCategory": null
  },
  "or": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "do": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "prefer": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "home": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  },
  "less": {
    "status": "unknown",
    "timesHeard": 1,
    "guessedCategory": null
  }
}
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting

