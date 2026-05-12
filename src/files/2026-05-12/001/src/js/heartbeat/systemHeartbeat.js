// THE UNIVERSAL HEARTBEAT SYSTEM

function systemHeartbeat(vessel)
{
    // INPUT: Grab the current binary state from the environment
    let a = vessel.currentInput[0];
    let b = vessel.currentInput[1];

    // THINK: Process the inputs through all 16 logic gates in perfect order
    let newCylinderLayer = [];

    for (let i = 0; i < gateFunctions.length; i++)
    {
        // Execute the function and push the binary result (0 or 1)
        newCylinderLayer.push(gateFunctions[i](a, b));
    }

    // REMEMBER: Stack the 16-bit array into the Long-Term Memory cylinder
    vessel.memoryDrive.push(newCylinderLayer);

    ge('output').innerHTML += `${vessel.name} logged memory layer ${vessel.memoryDrive.length}: [${newCylinderLayer}] <br>`;
    
    // UI Update (To visualize the heartbeat)
    console.log(`${vessel.name} logged memory layer ${vessel.memoryDrive.length}: [${newCylinderLayer}]`);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

