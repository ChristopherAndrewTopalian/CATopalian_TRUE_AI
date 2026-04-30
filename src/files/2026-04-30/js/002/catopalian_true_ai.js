// catopalian_true_ai.js

// gateTautology.js

function tau(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        // One or Both False or True
        return 1;
    }
    else
    {
        return 1;
    }
}

//----//

/*
TAUTOLOGY
1111

A  B
0  0  =  1
0  1  =  1
1  0  =  1
1  1  =  1

Opposite: CONTRADICTION
*/

//----//

// gateContradiction.js

function con(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        return 0;
    }
    else
    {
        return 0;
    }
}

//----//

/*
CONTRADICTION
0000

A B
0  0  =  0
0  1  =  0
1  0  =  0
1  1  =  0

Opposite: TAUTOLOGY
*/

//----//

// gateXor.js

function xor(a, b)
{
    if ((a == 1 && b == 0) ||
        (a == 0 && b == 1))
    {
        // A True or B True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
XOR
0110

A B
0  0  =  0
0  1  =  1
1  0  =  1
1  1  =  0

Opposite: XNOR
*/

//----//

// gateXnor.js

function xnor(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 1))
    {
        // Both False or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
XNOR
1001

A  B
0  0  =  1
0  1  =  0
1  0  =  0
1  1  =  1

Opposite: XOR
*/

//----//

// gateAnd.js

function and(a, b)
{
    if (a == 1 && b == 1)
    {
        // Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
AND
0001

A  B
0  0  =  0
0  1  =  0
1  0  =  0
1  1  =  1

Opposite: NAND
*/

//----//

// gateNand.js

function nand(a, b)
{
    if (a == 0 || b == 0)
    {
        // Both False or A True or B True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
NAND
1110

A  B
0  0  =  1
0  1  =  1
1  0  =  1
1  1  =  0

Opposite: AND
*/

//----//

// gateOr.js

function or(a, b)
{
    if (a == 1 || b == 1)
    {
        // One or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
OR
0111

A B
0  0  =  0
0  1  =  1
1  0  =  1
1  1  =  1

Opposite: NOR
*/

//----//

// gateNor.js

function nor(a, b)
{
    if (a == 0 && b == 0)
    {
        // Both False
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
NOR
1000

A B
0  0  =  1
0  1  =  0
1  0  =  0
1  1  =  0

Opposite: OR
*/

//----//

// gateMi.js

function mi(a, b)
{
    if (a == 0 || b == 1)
    {
        // Both False or B True or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
MI
1101

A  B
0  0  =  1
0  1  =  1
1  0  =  0
1  1  =  1

Opposite: MNI
*/

//----//

// gateMni.js

function mni(a, b)
{
    if (a == 1 && b == 0)
    {
        // A True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
MNI
0010

A B
0  0  =  0
0  1  =  0
1  0  =  1
1  1  =  0

Opposite: MI
*/

//----//

// gateCi.js

function ci(a, b)
{
    if (a == 1 || b == 0)
    {
        // Both False or A True or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
CI
1011

A B
0  0  =  1
0  1  =  0
1  0  =  1
1  1  =  1

Opposite: CNI
*/

//----//

// gateCni.js

function cni(a, b)
{
    if (a == 0 && b == 1)
    {
        // B True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
CNI
0100

A B
0  0  =  0
0  1  =  1
1  0  =  0
1  1  =  0

Opposite: CI
*/

//----//

// gateLp.js

function lp(a, b)
{
    if (a == 1)
    {
        // A True or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
LP
0011

A  B
0  0  =  0
0  1  =  0
1  0  =  1
1  1  =  1

Opposite: LC
*/

//----//

// gateLc.js

function lc(a, b)
{
    if (a == 0)
    {
        // Both False or B True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
LC
1100

A B
0  0  =  1
0  1  =  1
1  0  =  0
1  1  =  0

Opposite: LP
*/

//----//

// gateRp.js

function rp(a, b)
{
    if ((a == 0 && b == 1) ||
        (a == 1 && b == 1))
    {
        // B True or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
RP
0101

A  B
0  0  =  0
0  1  =  1
1  0  =  0
1  1  =  1

Opposite: RC
*/

//----//

// gateRc.js

function rc(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 0))
    {
        // Both False or A True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
RC
1010

A B
0  0  =  1
0  1  =  0
1  0  =  1
1  1  =  0

Opposite: RP
*/

//----//

let beings = [
    {
        name: 'Jane',
        age: 32,
    }, 

    {
        name: 'Taylor',
        age: 27,
    }

];

function fibn(array, name)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i].name.toLowerCase() === name.toLowerCase())
        {
            return array[i];
        }
    }
    return null;
}

// we map the array directly to our functional pure logic gates
let gateFunctions = [tau, con, xor, xnor, and, nand, or, nor, mi, mni, ci, cni, lp, lc, rp, rc];

class Being 
{
    constructor(data)
    {
        this.name = data.name;
        this.age = data.age;

        // Short-term RAM: What the vessel is currently experiencing
        this.currentInput = [0, 0]; 

        // Long-term Graph: The stacked cylinders
        this.memoryDrive = []; 
    }
}

let janeIndex = fibn(beings, 'Jane');
let jane = new Being(janeIndex);

// THE UNIVERSAL HEARTBEAT SYSTEM

function systemHeartbeat(vessel)
{
    // INPUT: Grab the current binary state from the environment
    let a = vessel.currentInput[0];
    let b = vessel.currentInput[1];

    // THINK: Process the inputs through all 16 logic gates in perfect order
    let newCylinderLayer = [];

    for (let i = 0; i < gateFunctions.length; i++)
    {
        // Execute the function and push the binary result (0 or 1)
        newCylinderLayer.push(gateFunctions[i](a, b));
    }

    // REMEMBER: Stack the 16-bit array into the Long-Term Memory cylinder
    vessel.memoryDrive.push(newCylinderLayer);

    // UI Update (To visualize the heartbeat)
    console.log(`${vessel.name} logged memory layer ${vessel.memoryDrive.length}: [${newCylinderLayer}]`);
}

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

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

