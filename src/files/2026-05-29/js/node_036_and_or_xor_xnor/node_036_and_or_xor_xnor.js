// node_036_and_or_xor_xnor.js

// Node 36: Intersection of Vertical Green (AND/OR) and Horizontal Cyan (XOR/XNOR)
function node_036_and_or_xor_xnor(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // AND is grounded by NAND (Mirror Wire true void). XOR is grounded by XNOR (Tension Wire opposite).
    if (and(a, b) == 1 && xor(a, b) == 1 && nand(a, b) == 0 && xnor(a, b) == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

