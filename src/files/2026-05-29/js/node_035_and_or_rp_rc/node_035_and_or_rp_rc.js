// node_035_and_or_rp_rc.js

// Node 35: Intersection of Vertical Green (AND/OR) and Diagonal Orange (RP/RC)
function node_035_and_or_rp_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // AND is grounded by NAND (Mirror Wire true void). RP is grounded by RC (Tension Wire opposite).
    if (and(a, b) == 1 && rp(a, b) == 1 && nand(a, b) == 0 && rc(a, b) == 0)
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

