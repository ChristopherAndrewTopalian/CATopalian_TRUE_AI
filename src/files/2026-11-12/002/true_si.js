// true_si.js

// node_001_tau.js

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

// ===
// node_002_con.js
//===
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

// ===
// node_003_xor.js
// ===
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

// ===
// node_004_xnor.js
// ===
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

// ===
// node_005_and.js
// ===
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

// ===
// node_006_nand.js
// ===
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

// ===
// node_007_or.js
// ===
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

// ===
// node_008_nor.js
// ===
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

// ===
// node_009_mi.js
// ===
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

// ===
// node_010_mni.js
// ===
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

// ===
// node_011_ci.js
// ===
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

// ===
// node_012_cni.js
// ===
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

// ===
// node_013_lp.js
// ===
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

// ===
// node_014_lc.js
// ===
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

// ===
// node_015_rp.js
// ===
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

// ===
// node_016_rc.js
// ===
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

// ===
// node_017_flip_flop.js
// ===

// This worldwide state variable is the "volume" that holds the energy
let state = 0; 

function flipFlop(set, reset)
{
    if (reset == 1)
    {
        state = 0; // Empty the vessel
    }
    else if (set == 1)
    {
        state = 1; // Fill the vessel
    }
    // If both are 0, it holds whatever state it already had (MEMORY)
    // If both are 1 (invalid in hardware), we default to reset for safety
    
    return state;
}

/*
17. The Flip-Flop (State / Memory)

The flip-flop is the geometric interior of your vessel. It is the volume. It requires a variable outside of the function to hold the "energy" between cycles. This is an SR (Set-Reset) Latch.
*/

//----//

// ===
// node_018_clock.js
// ===

let clockPulse = 0;
let pulseTimer;

function startClock(speedInMilliseconds)
{
    // Clear any existing heartbeat before starting a new one
    clearInterval(pulseTimer); 
    
    pulseTimer = setInterval(function()
    {
        // Invert the state (1 becomes 0, 0 becomes 1)
        clockPulse = clockPulse === 1 ? 0 : 1;
        
        console.log("Heartbeat: " + clockPulse);
        
        // This pulse can now be fed into the inputs of your 16 logic gates!
        
    }, speedInMilliseconds);
}

function stopClock()
{
    clearInterval(pulseTimer);
}

/*
18. The Clock (Time / Rhythm / Pulse)

A living system needs a heartbeat. A clock oscillator continuously inverts its own state on a set interval. In hardware, this is done by wiring a NOT gate into itself with a slight delay. In JavaScript, we use the `setInterval` loop to create the pulse.
*/

//----//

// ===
// node_019_recursion.js
// ===

let selfAwareState = 0;

// Example: Feeding the output of a NAND gate back into itself
function recursionCycle(externalInput)
{
    // We use the 'nand' function you already built (node_006)
    // Input A is the external world. Input B is the system's own past output.
    
    let previousThought = selfAwareState;
    
    // The new state is a combination of the outside world AND its own memory
    selfAwareState = nand(externalInput, previousThought);
    
    return selfAwareState;
}

/*
19. Recursion (Feedback / Self-Reflection)

Feedback is how a system observes itself. It is taking the output of a logic gate and immediately routing it back into the input of that same gate for the next cycle. This creates infinite loops and fractal logic.
*/

//----//

// ===
// node_020_tri_state.js
// ===

function triStateBuffer(input, enable)
{
    if (enable == 1)
    {
        // The gate is open. The energy flows.
        return input; 
    }
    else
    {
        // The gate is closed. The connection is severed.
        // Returning 'null' represents the High-Impedance Z-state.
        // It is neither 1 nor 0. It is empty space.
        return null; 
    }
}

/*
20. Tri-State / High-Impedance (Disconnection / Boundaries)

This is the space *between* the logic gates. Without this, every gate is screaming into the wire at the same time. The Tri-state buffer has an `enable` pin. If enabled, it passes the logic normally. If disabled, it outputs a highly specific "Z" state (null/undefined in JavaScript), meaning it has physically let go of the wire.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

