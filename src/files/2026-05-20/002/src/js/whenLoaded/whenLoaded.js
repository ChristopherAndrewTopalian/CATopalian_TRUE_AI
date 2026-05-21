// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    loadMemory();

    randomInputs();

    /*
    thinking = setInterval(function()
    {
        // Calculate and store the thought
        let currentThought = think(A, B); 

        // Update the "Forebrain" div
        ge('currentThoughtDiv').textContent = JSON.stringify(currentThought);

        // Create the "Viewport" for the DOM
        // Grab the newest 15 items, reverse them for top-down display
        let recentThoughts = thoughts.slice(-16).reverse();

        // Format the viewport nicely (one array per line)
        let displayData = "[\n  " + recentThoughts.map(t => JSON.stringify(t)).join(",\n  ") + "\n]";

        // Render to screen (textContent is faster than innerHTML for pure text)
        ge('thoughtsDiv').textContent = displayData;

    }, 1000);
    */

    thinking = setInterval(function()
    {
        // Calculate and store the thought
        let currentThought = think(A, B); 

        // Update the "Forebrain" div
        ge('currentThoughtDiv').textContent = JSON.stringify(currentThought);

        // Create the "Viewport" for the DOM
        // Grab the newest 16 items, reverse them for top-down display
        let recentThoughts = thoughts.slice(-16).reverse();

        // The Traditional ES5 approach to format the viewport
        let stringifiedRecent = [];

        for (let i = 0; i < recentThoughts.length; i++)
        {
            stringifiedRecent.push(JSON.stringify(recentThoughts[i]));
        }

        // Format the viewport nicely (one array per line)
        let displayData = "[\n  " + stringifiedRecent.join(",\n  ") + "\n]";

        // Render to screen
        ge('thoughtsDiv').textContent = displayData;

    }, 1000);

    //-//

    window.addEventListener("beforeunload", function(event)
    {
        // Prevent default behavior
        event.preventDefault(); 

        // Set the returnValue to an empty string (Required by Chrome and Edge)
        event.returnValue = ""; 

        // Note: The browser will ignore any text we put here and will 
        // only display its native, generic warning dialog.
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

