// unified_CortexMemory_class.js

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

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

