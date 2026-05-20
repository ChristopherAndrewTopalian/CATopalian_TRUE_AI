// loadMemory.js

function loadMemory()
{
    let script = ce('script');
    // If the memory file exists, it loads and triggers this
    script.onload = function()
    {
        console.log("Memory loaded. Vessel re-inhabited.");
        // If interface is already built, we can update the view here
        if (ge('thoughtsDiv'))
        {
            ge('thoughtsDiv').innerHTML = JSON.stringify(thoughts);
        }
    };

    // If there is no memory file yet (first time opening the vessel)
    script.onerror = function()
    {
        console.log("No previous memory found. Initializing a blank timeline.");
        thoughts = []; // Start with an empty timeline
    };

    script.src = 'src/js/thoughts/thoughts.js';
    document.getElementsByTagName('head')[0].append(script);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

