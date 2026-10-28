// unified_CortexMemory_class_example.js

class CortexMemory {
    constructor() {
        this.list = [];         // The Spreadsheet (Array of Objects)
        this.index = new Map(); // The Card Catalog (Map Reference)
    }

    // Adding Data: Updates both structures simultaneously
    add(item) {
        if (!item.id) {
            console.error("Item must have an 'id' property.");
            return;
        }
        
        // Prevent duplicates from ruining the array
        if (this.index.has(item.id)) {
            console.warn(`Item ${item.id} already exists.`);
            return;
        }

        this.list.push(item);
        this.index.set(item.id, item);
    }

    // Instant Lookup: Bypasses the array entirely
    get(id) {
        return this.index.get(id);
    }

    // Deleting Data: Safely removes from both
    remove(id) {
        if (!this.index.has(id)) return false;

        // Remove from Map (Instant)
        this.index.delete(id);

        // Remove from Array
        const rowIndex = this.list.findIndex(item => item.id === id);
        if (rowIndex !== -1) {
            this.list.splice(rowIndex, 1);
        }
        return true;
    }

    // The Array Escape Hatch: Returns the master array for built-in methods
    get spreadsheet() {
        return this.list;
    }
}

//----//

// Initialize our unified structure
const myCortex = new CortexMemory();

// Add some data
myCortex.add({ id: 'apple', type: 'noun', score: 50 });
myCortex.add({ id: 'run', type: 'verb', score: 95 });
myCortex.add({ id: 'fast', type: 'adjective', score: 80 });

// THE 0ms MAP LOOKUP
const target = myCortex.get('run');
console.log("Instant Lookup:", target.type); // Output: 'verb'

// Modify the data directly
target.score = 100; 

// THE ARRAY METHODS (The Escape Hatch)
// We can still use .filter, .some, .map, and .sort!
const highScores = myCortex.spreadsheet.filter(word => word.score > 85);

console.log("\nWords over 85 score:");
highScores.forEach(word => console.log(word.id)); 
// Output: run, fast

// SAFE DELETION
myCortex.remove('apple');
console.log("\nSpreadsheet length:", myCortex.spreadsheet.length); // Output: 2
console.log("Map knows apple is gone:", myCortex.get('apple') === undefined); // Output: true

//----//

/*
Instant Lookup: verb

Words over 85 score:
run

Spreadsheet length: 2
Map knows apple is gone: true
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

