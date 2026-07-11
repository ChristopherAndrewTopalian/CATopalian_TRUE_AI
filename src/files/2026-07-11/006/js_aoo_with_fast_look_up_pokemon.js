// js_aoo_with_fast_look_up_pokemon.js

let world = [
    pikachu = {
        id: "pikachu",
        type: "electric",
        x: 100,
        y: 200,
        collidable: true
  },

    charizard = {
        id: "charizard",
        type: "fire",
        x: 300,
        y: 150,
        collidable: true
    },

    charmander  = {
        id: "charmander",
        type: "fire",
        x: 50,
        y: 100,
        active: false
    }
];

world["pikachu"] = pikachu;
world["charizard"] = charizard;
world["charmander"] = charmander;

world.pikachu.x = 500;

console.log(world.pikachu);

// Keyboard Controls
document.addEventListener('keydown', function(event)
{
    // SAVE WORLD!
    if (event.key === 's')
    {
        // JSON.stringify strictly saves the numbered array items [0, 1, 2].
        // It automatically ignores the hash strings so you get zero duplicate data!
        let savedLevel = JSON.stringify(world, null, 2);

        let date = new Date().toLocaleString('en-US');

        console.log('World Saved!' + ' ' + date);

        console.log(savedLevel);
    }
});

//----//

/*
Object { id: "pikachu_001", type: "electric", x: 500, y: 200, collidable: true }
​
collidable: true
​
id: "pikachu_001"
​
type: "electric"
​
x: 500
​
y: 200
​
<prototype>: Object { … }
*/

/*
When we press the letter S,
it will save the hybrid world array
and print a clean, lightweight list to console!
*/

/*
World Saved! 7/11/2026, 3:40:55 PM
[
  {
    "id": "pikachu",
    "type": "electric",
    "x": 500,
    "y": 200,
    "collidable": true
  },
  {
    "id": "charizard",
    "type": "fire",
    "x": 300,
    "y": 150,
    "collidable": true
  },
  {
    "id": "charmander",
    "type": "fire",
    "x": 50,
    "y": 100,
    "active": false
  }
]
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

