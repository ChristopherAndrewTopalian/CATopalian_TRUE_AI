// node_020_lp_rc_xor_xnor.js

// Node 20: Intersection of Vertical Orange (LP/RC) and Horizontal Cyan (XOR/XNOR)
function node_020_lp_rc_xor_xnor(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // LP is grounded by LC. RC is grounded by RP. XOR is grounded by XNOR (Tension).
    if (lp(a, b) == 1 && rc(a, b) == 1 && xor(a, b) == 1 && lc(a, b) == 0 && rp(a, b) == 0 && xnor(a, b) == 0)
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

