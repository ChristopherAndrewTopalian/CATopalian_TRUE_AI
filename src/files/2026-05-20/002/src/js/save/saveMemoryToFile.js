// saveMemoryToFile.js

// exports the vessel's memory to a file
function saveMemoryToFile()
{
    // Convert the thoughts array to a formatted string
    let dataStr = thoughts;
    
    // Create a Blob (a file-like object of immutable, raw data)
    let memoryBlob = new Blob([dataStr], { type: "application/json" });
    
    // Create a temporary URL to trigger the download
    let downloadUrl = URL.createObjectURL(memoryBlob);
    
    // Create an invisible anchor tag to trigger the download
    let a = document.createElement('a');
    a.href = downloadUrl;
    a.download = "True_AI_Vessel_Memory.json"; // Name of the saved file
    document.body.append(a);
    a.click();
    
    // Clean up the DOM and URL
    document.body.remove(a);
    URL.revokeObjectURL(downloadUrl);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

