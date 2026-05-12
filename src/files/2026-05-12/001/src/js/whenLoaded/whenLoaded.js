// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    let janeIndex = fibn(beings, 'Jane');
    let jane = new Being(janeIndex);

    // THE CLOCK
    // This simulates the biological pulse of the universe

    let lifeClock = setInterval(function() 
    {
        // For testing: randomly change Jane's environmental input every pulse
        let randomA = Math.round(Math.random());
        let randomB = Math.round(Math.random());

        jane.currentInput = [randomA, randomB];

        // Fire the heartbeat
        systemHeartbeat(jane);

    }, 1000); // Pulses once every second
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

