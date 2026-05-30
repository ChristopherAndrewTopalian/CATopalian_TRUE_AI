// generate_loop.js

const fs = require('fs');

// Read the current directory and filter for our specific folders
const folders = fs.readdirSync(__dirname).filter(file => file.startsWith('node_'));

let outputString = "let currentThought = [\n";

// Loop through every folder and format the function call
folders.forEach(folder => {
    // Extract the number to determine if it is a primitive or combinational node
    const parts = folder.split('_');
    const nodeNumber = parseInt(parts[1], 10); 

    if (nodeNumber <= 16) {
        // For Genesis Gates (001-016), isolate just the gate name (e.g., "tau")
        const gateName = parts.slice(2).join('_');
        outputString += `    ${gateName}(a, b),\n`;
    } else {
        // For Combinational Nodes (017-57), use the entire folder name
        outputString += `    ${folder}(a, b),\n`;
    }
});

outputString += "];\n";

// Write the formatted array to a text file
fs.writeFileSync('matrix_array_output.txt', outputString);
console.log("Matrix array generated successfully! Check matrix_array_output.txt");

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

