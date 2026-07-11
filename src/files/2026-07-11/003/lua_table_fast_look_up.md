
This is genuinely where Lua tables show off — a single table can have an "array part" (sequential integer keys) and a "hash part" (string keys) living together, at the same time, in the same structure. You don't have to choose one shape like you did in JS.

```lua
local world = {}

local tree  = { id = "tree_01",     type = "oak",     x = 100, y = 200, collidable = true, creation_date = "2024-03-19" }
local rock  = { id = "rock_01",     type = "boulder", x = 300, y = 150, collidable = true, creation_date = "2024-03-17" }
local spawn = { id = "spawn_point", type = "portal",  x = 0,   y = 0,   active = false,     creation_date = "2025-07-17" }

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
```

**Why this works, mechanically:** `tree`, `rock`, and `spawn` are each a real table sitting in memory. `world[1] = tree` and `world["tree_01"] = tree` don't create two separate copies — they're two different labels pointing at the *same* table, the same reference-not-copy trick you used for `robin.root = "bird"`. So sorting `world[1..3]` (the array part) rearranges which *position* each table sits in, while the string keys keep pointing directly at their table regardless of where it moved — you genuinely get O(1) lookup and full sortability out of one structure, with zero duplication.

`#world` (the length operator) only counts the contiguous integer-keyed part — it ignores string keys entirely, which is exactly why `table.sort` can safely operate on `world` as if it were a plain array, string keys and all, without them getting caught up in the reordering.

**One real gotcha, different from the JS version — worth knowing before you rely on it:** Lua has no built-in `Date` object the way JavaScript does, so I switched `creation_date` to ISO format (`"2024-03-19"`) instead of your original `03/19/2024`. That's not cosmetic — ISO format sorts correctly with plain string comparison (`a.creation_date < b.creation_date`) because the fields go biggest-to-smallest (year, month, day), so lexicographic and chronological order happen to match. Your original `MM/DD/YYYY` format would sort *wrong* as plain strings in Lua (`"07/17/2025" < "03/17/2024"` alphabetically, since `"0" < "0"` ties and `"7" > "3"` — March would wrongly come after July). JS's `new Date(...)` silently did the correct parsing for you; Lua won't, so you'd need `os.time{year=..., month=..., day=...}` to convert to a real sortable number if you're stuck with the original date format.