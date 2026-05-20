// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    loadMemory();

    randomInputs();

    thinking = setInterval(function()
    {
        ge('currentThoughtDiv').textContent = think(A, B);

        ge('thoughtsDiv').innerHTML = JSON.stringify(thoughts);
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

