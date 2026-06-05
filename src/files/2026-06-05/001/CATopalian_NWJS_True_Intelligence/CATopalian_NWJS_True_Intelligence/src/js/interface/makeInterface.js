// makeInterface.js

function makeInterface()
{
    ba(makeTitleOfApp());

    //-//

    let btnStart = ce('button');
    btnStart.textContent = 'Map English Words';
    btnStart.onclick = function()
    {
        initializeLocalBrain();
    };
    ba(btnStart);

    //-//

    let btnTrain = ce('button');
    btnTrain.textContent = 'Begin Training';
    btnTrain.onclick = function()
    {
        // IGNITE THE ENGINE (Run the loop 100 times)
        trainNetwork(100);
    };
    ba(btnTrain);

    //-//

    let output = ce('div');
    output.id = 'output';
    output.textContent = '';
    output.style.border = 'solid 1px white';
    output.style.width = '400px';
    output.style.height = '200px';
    output.style.wordWrap = 'word-wrap';
    output.style.overflow = 'scroll';
    output.style.padding = '4px 7px';
    ba(output);

    //-//

    let wordsDiv = ce('div');
    wordsDiv.id = 'wordsDiv';
    wordsDiv.textContent = '';
    wordsDiv.style.border = 'solid 1px white';
    wordsDiv.style.width = '400px';
    wordsDiv.style.height = '200px';
    wordsDiv.style.wordWrap = 'word-wrap';
    wordsDiv.style.overflow = 'scroll';
    wordsDiv.style.padding = '4px 7px';
    ba(wordsDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

