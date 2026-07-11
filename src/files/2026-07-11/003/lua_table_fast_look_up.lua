-- lua_table_fast_look_up.lua

local world = {}

local tree = {
    id = "tree_01",
    type = "oak",
    x = 100,
    y = 200,
    collidable = true,
    creation_date = "2024-03-19"
}

local rock = {
    id = "rock_01",
    type = "boulder",
    x = 300,
    y = 150,
    collidable = true,
    creation_date = "2024-03-17"
}

local spawn = {
    id = "spawn_point",
    type = "portal",
    x = 0,
    y = 0,
    active = false,
    creation_date = "2025-07-17"
}

-- ARRAY PART (integer keys) — gives you order, and table.sort works on this
world[1] = tree
world[2] = rock
world[3] = spawn

-- HASH PART (string keys) — gives you instant lookup
-- Same tables, not copies — one shared source of truth, two ways to reach it
world["tree_01"]     = tree
world["rock_01"]     = rock
world["spawn_point"] = spawn

-- INSTANT LOOKUP, exactly like JS's world["rock_01"]
print(world["rock_01"].x)  --> 300

-- SORT THE ARRAY PART — table.sort only touches indices 1..#world,
-- the string keys are completely untouched by it
table.sort(world, function(a, b)
    return a.creation_date < b.creation_date
end)

for i = 1, #world do
    print(world[i].id, "-", world[i].creation_date)
end
--> rock_01 - 2024-03-17
--> tree_01 - 2024-03-19
--> spawn_point - 2025-07-17

-- LOOKUP STILL WORKS AFTER SORTING — nothing about the hash part moved
print(world["rock_01"].x)  --> still 300

----

-- Dedicated to God the Father
-- All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
-- https://github.com/ChristopherTopalian
-- https://github.com/ChristopherAndrewTopalian
-- https://sites.google.com/view/CollegeOfScripting

