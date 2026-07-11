// js_aoo_with_fast_look_up_a.md

```javascript
let tree  = { id: "tree_01",     type: "oak",     x: 100, y: 200, collidable: true, creation_date: "2024-03-19" };
let rock  = { id: "rock_01",     type: "boulder", x: 300, y: 150, collidable: true, creation_date: "2024-03-17" };
let spawn = { id: "spawn_point", type: "portal",  x: 0,   y: 0,   active: false,     creation_date: "2025-07-17" };

let world = [tree, rock, spawn]; // array part — order, sortable

world.tree_01     = tree;   // hash part — instant lookup
world.rock_01     = rock;
world.spawn_point = spawn;

console.log(world.rock_01.x); // 300 — instant, no scanning

world.sort(function (a, b) {
    return new Date(a.creation_date) - new Date(b.creation_date);
});

console.log(world.rock_01.x); // still 300 — sort never touched the named keys
```

This *is* the array-of-objects version of the Lua trick — same array, same objects, just with named shortcuts attached directly onto it. Nothing extra needed beyond what you already had.

**Now, saving — and there's one real gotcha here worth knowing before you build your S-button.**

```javascript
let saved = JSON.stringify(world, null, 2);
console.log(saved);
```

`null` is the second argument (the "replacer") — passing `null` means "don't filter or transform anything, include it all as-is." `2` is the third argument — it tells `JSON.stringify` to indent nested content with 2 spaces per level, which is what makes the output human-readable instead of one long unbroken line.

**Here's the gotcha:** `JSON.stringify` on an array only ever writes out the numbered slots (`world[0]`, `world[1]`, `world[2]`) — it completely ignores the named properties you attached (`world.rock_01`, etc.), because as far as JSON is concerned, an array is defined purely by its length and indices. So your saved file would contain `tree`, `rock`, and `spawn` in order, but no `rock_01` shortcut at all. **The good news: you don't actually need to save that part**, since it's just a duplicate pointer to data that's already in the array — you can cheaply rebuild it after loading:

```javascript
function saveWorld(world) {
    return JSON.stringify(world, null, 2);
}

function loadWorld(json) {
    let world = JSON.parse(json);

    // rebuild the instant-lookup shortcuts from each object's own id
    for (let i = 0; i < world.length; i++) {
        world[world[i].id] = world[i];
    }

    return world;
}

// round-trip test:
let saved = saveWorld(world);
let reloaded = loadWorld(saved);

console.log(reloaded.rock_01.x); // 300 — lookup works again after loading
```

So the save file itself stays clean and non-redundant (just the ordered list, no duplicated pointers), and `loadWorld` reconstructs the fast-lookup shortcuts in one small loop right after parsing — same overall shape as the Lua version, just split into "what actually gets written to disk" versus "what gets rebuilt in memory the moment you load it back in."

---

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting  

