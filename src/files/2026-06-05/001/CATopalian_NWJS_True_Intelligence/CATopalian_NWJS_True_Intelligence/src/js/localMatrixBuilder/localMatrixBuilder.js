// localMatrixBuilder.js

function initializeLocalBrain()
{
    console.log("Locating English Dictionary on local hard drive...");

    ge('output').textContent += "Locating English Dictionary on local hard drive...\n";

    const dictionaryPath = path.join(process.cwd(), 'src/js/english/words_dictionary.json');

    // Read the raw text file from the hard drive
    let rawData = fs.readFileSync(dictionaryPath, 'utf8');
    
    // Convert the raw text into a usable JavaScript Object
    let englishWords = JSON.parse(rawData);

    let masterLexicon = {};
    let dimensionCount = 56; 

    console.log("Dictionary loaded. Generating 56-bit neural pathways...");

    ge('output').textContent += "Dictionary loaded. Generating 56-bit neural pathways...\n";

    // Loop through the massive Object
    for (let word in englishWords) 
    {
        let randomThoughtArray = [];

        for (let i = 0; i < dimensionCount; i++) 
        {
            // Randomly push a 0 or a 1
            randomThoughtArray.push(Math.round(Math.random())); 
        }

        masterLexicon[word] = randomThoughtArray;
    }

    let totalWords = Object.keys(masterLexicon).length;

    console.log(`Brain initialized! Mapped ${totalWords} words.`);

    ge('output').textContent += `Brain initialized! Mapped ${totalWords} words.\n`;

    // ge('wordsDiv').textContent = JSON.stringify(masterLexicon);

    // THE PERSISTENCE STEP: Save the new brain to the hard drive
    saveBrainToDisk(masterLexicon);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

