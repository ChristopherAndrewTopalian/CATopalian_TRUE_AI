// downloadMemory.js

function downloadMemory()
{
    // Format the timeline with line breaks and 2 spaces
    //let formattedData = JSON.stringify(thoughts, null, 2);

    // Wrap it so it becomes a valid JavaScript variable assignment
    //let fileContent = "thoughts = \n" + formattedData + ";";

    /* // E6
    // This puts each 16-gate array on exactly one line.
    let formattedData = "[\n  " + thoughts.map(thought => JSON.stringify(thought)).join(",\n  ") + "\n]";

    let fileContent = "thoughts = \n" + formattedData + ";";
    */

    // Traditional ES5 method for formatting the massive timeline
    let stringifiedThoughts = [];

    for (let i = 0; i < thoughts.length; i++)
    {
        stringifiedThoughts.push(JSON.stringify(thoughts[i]));
    }

    let formattedData = "[\n  " + stringifiedThoughts.join(",\n  ") + "\n]";
    let fileContent = "thoughts = \n" + formattedData + ";";

    // Encode it for downloading
    let dataStr = "data:text/javascript;charset=utf-8," + encodeURIComponent(fileContent);

    // Create the anchor element dynamically using your shortcut
    let dlAnchorElem = ce('a');
    dlAnchorElem.setAttribute("href", dataStr);

    // Save as a .js file for auto loading later
    dlAnchorElem.setAttribute("download", "thoughts.js"); 

    document.body.append(dlAnchorElem);
    dlAnchorElem.click();
    dlAnchorElem.remove(); // Clean up the DOM after download
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

