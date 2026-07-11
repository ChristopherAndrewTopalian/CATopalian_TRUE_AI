// js_aoo_with_fast_look_up.js

// THE ARRAY PART (Door 1: Numbered shelves for 60fps looping & sorting)

// Create our individual objects using simple literals.
// We include an 'id' inside each one so the save file remembers its name!

let world = [
    tree_01 = {
        id: "tree_01",
        type: "oak",
        x: 100,
        y: 200,
        collidable: true
  },

    rock_01 = {
        id: "rock_01",
        type: "boulder",
        x: 300,
        y: 150,
        collidable: true
    },

    spawn_point = {
        id: "spawn_point",
        type: "portal",
        x: 0,
        y: 0,
        active: false
    }
];

// THE HASH PART (Door 2: Named strings for instant O(1) lookup!)
world["tree_01"] = tree_01;
world["rock_01"] = rock_01;
world["spawn_point"] = spawn_point;

// PROVE THAT BOTH DOORS LEAD TO THE SAME ROOM
// If we change the X coordinate using the fast string lookup...
world["rock_01"].x = 17;

// ...it immediately updates inside the numbered array loop too!
console.log("Array Slot 1 X coordinate is now: " + world[1].x); // 17

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
When we press the letter S,
it will save the hybrid world array
and print a clean, lightweight list to console!
*/

/*
World Saved! 7/11/2026, 2:18:05 PM
[
  {
    "id": "tree_01",
    "type": "oak",
    "x": 100,
    "y": 200,
    "collidable": true
  },
  {
    "id": "rock_01",
    "type": "boulder",
    "x": 17,
    "y": 150,
    "collidable": true
  },
  {
    "id": "spawn_point",
    "type": "portal",
    "x": 0,
    "y": 0,
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

