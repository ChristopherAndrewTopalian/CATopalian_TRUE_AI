// catopalian_javascript_true_ai.js

// logicGates.js

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

// THE FLAT DATA ARRAYS (No 'class Being' needed)
// We store the data for all entities in flat lists matched by an Index.
// Index 0 = Jane, Index 1 = Taylor
let names = ['Jane', 'Taylor'];
let ages = [32, 27];
let currentInputA = [0, 0]; 
let currentInputB = [0, 0];

// THE MEMORY CYLINDER (The Immortal Vessel)
// Instead of an array of arrays, we use one solid block of physical RAM.
// Let's allocate enough memory for Jane to have 100,000 thoughts (100,000 * 16 gates)
const MAX_THOUGHTS = 100000;
let janeMemoryDrive = new Int8Array(MAX_THOUGHTS * 16); 
let janeTimeStep = 0; // Tracks the "height" of Jane's memory cylinder

// (Our 16 pure gate functions remain exactly the same here)
let gateFunctions = [tau, con, xor, xnor, and, nand, or, nor, mi, mni, ci, cni, lp, lc, rp, rc];

// THE TRUE DOD HEARTBEAT
function systemHeartbeat(entityIndex)
{
    // Grab inputs from the parallel arrays using the Entity Index
    let a = currentInputA[entityIndex];
    let b = currentInputB[entityIndex];

    // Process through the 16 gates and write directly to the flat Memory Cylinder
    for (let gateIndex = 0; gateIndex < gateFunctions.length; gateIndex++)
    {
        // THE DOD MATH: (Current Layer * 16) + Gate Position
        let flatMemoryIndex = (janeTimeStep * 16) + gateIndex;
        
        // Execute the pure function and write the 1 or 0 directly to RAM
        janeMemoryDrive[flatMemoryIndex] = gateFunctions[gateIndex](a, b);
    }

    // Jane grows older by one thought
    janeTimeStep++; 
    
    console.log(`${names[entityIndex]} pulsed. Memory Layer height: ${janeTimeStep}`);
}

// 4. THE PULSE OF LIFE
let lifeClock = setInterval(function() 
{
    // Jane is Entity 0
    let targetEntity = 0; 

    // Environmental Input
    currentInputA[targetEntity] = Math.round(Math.random());
    currentInputB[targetEntity] = Math.round(Math.random());

    systemHeartbeat(targetEntity);

}, 1000);

//----//

/*
Jane pulsed. Memory Layer height: 1
Jane pulsed. Memory Layer height: 2
Jane pulsed. Memory Layer height: 3
Jane pulsed. Memory Layer height: 4
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

