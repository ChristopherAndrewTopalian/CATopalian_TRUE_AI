// loadMemoryFromFile.js

// reads the file and re-inhabit the vessel
function loadMemoryFromFile(event)
{
    let file = event.target.files[0];

    // If no file was selected, stop the function
    if (!file) {
        return; 
    }
    
    let reader = new FileReader();
    
    // When the file is fully read, parse the JSON and restore the array
    reader.onload = function(e) {
        let contents = e.target.result;
        thoughts = JSON.parse(contents);
        
        console.log("Memory restored. The vessel is re-inhabited.");
        // Update our DOM here to show the newly loaded thoughts
        ge('thoughtsDiv').innerHTML = JSON.stringify(thoughts);
    };
    
    // Execute the read process
    reader.readAsText(file);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

