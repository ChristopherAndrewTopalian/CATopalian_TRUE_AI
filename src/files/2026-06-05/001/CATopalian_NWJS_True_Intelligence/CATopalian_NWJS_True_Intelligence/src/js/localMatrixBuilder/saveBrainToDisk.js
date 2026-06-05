// saveBrainToDisk.js

function saveBrainToDisk(brainObject)
{
    console.log("Hardwiring neural pathways to disk...");

    ge('output').textContent += 'Hardwiring neural pathways to disk...\n';

    // Convert the massive mapped Object back into a text string
    let brainString = JSON.stringify(brainObject);

    let outputPath = path.join(process.cwd(), 'src/js/english/catopalian_brain_v1.json');
    
    // Write the file physically to the drive
    fs.writeFileSync(outputPath, brainString, 'utf8');
    
    console.log(`SUCCESS! Brain permanently hardwired and saved to: ${outputPath}`);

    ge('output').textContent += `SUCCESS! Brain permanently hardwired and saved to: ${outputPath}\n`;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

