// trainBrain.js

// LOAD THE FROZEN BRAIN
const brainPath = path.join(process.cwd(), 'src/js/english/catopalian_brain_v1.json');

let brain = JSON.parse(fs.readFileSync(brainPath, 'utf8'));

// THE TRAINING DATA (The Rosetta Stone)
// We provide human context to group concepts together in the hypercube.
const trainingData = [
    ["yes", "affirmative"],
    ["yes", "yep"],
    ["yes", "agreed"],
    ["no", "negative"],
    ["no", "nope"],
    ["dog", "puppy"]
];

// THE CORE TRAINING ENGINE
function trainNetwork(epochs) 
{
    console.log(`Starting Training Loop for ${epochs} Epochs...`);

    ge('wordsDiv').textContent += `Starting Training Loop for ${epochs} Epochs...\n`;

    // An "Epoch" is one complete pass over all the training data
    for (let epoch = 1; epoch <= epochs; epoch++) 
    {
        let totalFlipsThisEpoch = 0;

        for (let i = 0; i < trainingData.length; i++) 
        {
            let wordA = trainingData[i][0];
            let wordB = trainingData[i][1];

            let thoughtA = brain[wordA];
            let thoughtB = brain[wordB];

            // Safety check: ensure both words actually exist in the dictionary
            if (!thoughtA || !thoughtB) continue; 

            // Find exactly which dimensions (indexes) are different
            let differingIndexes = [];
            for (let j = 0; j < thoughtA.length; j++) 
            {
                if (thoughtA[j] !== thoughtB[j]) 
                {
                    differingIndexes.push(j);
                }
            }

            // THE NUDGE (The Learning Rate)
            // If they have more than 5 differences, they are too far apart. Pull them closer!
            if (differingIndexes.length > 5) 
            {
                // Pick one random differing bit from the array
                let randomIndex = differingIndexes[Math.floor(Math.random() * differingIndexes.length)];
                
                // Physically flip wordB's bit to match wordA's bit
                brain[wordB][randomIndex] = thoughtA[randomIndex];
                
                totalFlipsThisEpoch++;
            }
        }

        console.log(`Epoch ${epoch} complete. Flipped ${totalFlipsThisEpoch} bits.`);

        ge('wordsDiv').textContent += `Epoch ${epoch} complete. Flipped ${totalFlipsThisEpoch} bits.\n`;
        
        // If the engine runs through the data and 0 bits need flipping, the words are perfectly aligned!
        if (totalFlipsThisEpoch === 0) 
        {
            console.log("Matrix has reached optimal equilibrium!");

            ge('wordsDiv').textContent += "Matrix has reached optimal equilibrium!\n";

            break;
        }
    }

    // FREEZE AND SAVE THE NEW BRAIN
    saveUpgradedBrain();
}

function saveUpgradedBrain() 
{
    // We save it as v2 so we never accidentally destroy our v1 baseline
    let outputPath = path.join(process.cwd(), 'src/js/english/catopalian_brain_v2.json');
    fs.writeFileSync(outputPath, JSON.stringify(brain), 'utf8');

    console.log(`SUCCESS: Brain V2 Saved! The hypercube has been structurally altered.`);

    ge('wordsDiv').textContent += `SUCCESS: Brain V2 Saved! The hypercube has been structurally altered.\n`;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

