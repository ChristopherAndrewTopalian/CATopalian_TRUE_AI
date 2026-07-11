// js_aoo_with_fast_look_up_c.md

This brings us to a fascinating secret about how `JSON.stringify()` operates under the hood!

In our new hybrid structure, `world` is technically an **Array** that has named properties attached to it. Here is the candid truth about how JavaScript handles this: **When you run `JSON.stringify()` on an Array, it strictly only converts the numbered index slots (`0`, `1`, `2`). It automatically strips away and ignores custom attached names!**

At first glance, that might sound like a problem, but it is actually a **massive engineering advantage**!

Because every single object in your list already has its own internal `id` property (like `id: "tree_01"`), saving just the Array saves 100% of your game data without any duplicates. When you load the game back up later, you just run a quick loop to re-attach those instant-lookup names.

Here is exactly how your Save Script and Load Routine look using our pure ES5 function style:

## 1. Saving the Hybrid World (Press 'S')

You can use the exact same keydown listener you wrote before! You just pass the `world` array directly into `JSON.stringify`.

```js
// Keyboard Controls for Saving
document.addEventListener('keydown', function(event) 
{
    // SAVE WORLD!
    if (event.key === 's') 
    {
        // Automatically converts just the numbered array items into clean JSON
        let savedLevel = JSON.stringify(world, null, 2);

        let date = new Date().toLocaleString('en-US');

        console.log('World Saved! ' + date);
        console.log(savedLevel);
    }
});

```

### The Console Output

When you press **S**, the console outputs a perfectly clean, standardized Array of Objects—with no duplicate data cluttering up your save file!

```json
[
  {
    "id": "tree_01",
    "type": "oak",
    "x": 100,
    "y": 200,
    "collidable": true,
    "creation_date": "2024-03-19"
  },
  {
    "id": "rock_01",
    "type": "boulder",
    "x": 300,
    "y": 150,
    "collidable": true,
    "creation_date": "2024-03-17"
  },
  {
    "id": "spawn_point",
    "type": "portal",
    "x": 0,
    "y": 0,
    "active": false,
    "creation_date": "2025-07-17"
  }
]

```

---

## 2. Rebuilding the Hybrid Links on Load

When you want to load that JSON string back into your game engine, you just parse the array, and then use a standard `for` loop to instantly re-attach your named hash properties!

```js
function loadWorld(jsonString) 
{
    // 1. Convert the saved JSON string back into a standard Array of Objects
    let loadedWorld = JSON.parse(jsonString);

    // 2. Loop through the array and re-attach our instant O(1) hash lookups!
    for (let i = 0; i < loadedWorld.length; i++) 
    {
        let item = loadedWorld[i];
        
        // This recreates loadedWorld["tree_01"] = item;
        loadedWorld[item.id] = item;
    }

    return loadedWorld;
}

```

By doing it this way, your saved files stay lightweight and clean, but the second the game loads into memory, your ultra-fast `world.rock_01.x` direct lookups are completely restored and ready for collision detection!

Would you like to write a matching keydown listener for the letter **'l'** (Load) that takes a saved JSON string and runs it through that `loadWorld` function to see the rebuilt object in action?

---

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting  

