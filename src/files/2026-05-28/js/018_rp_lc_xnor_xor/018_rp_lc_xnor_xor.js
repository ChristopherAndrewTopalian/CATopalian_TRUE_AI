// 018_rp_lc_xnor_xor.js

// Node 18: Intersection of Vertical Orange (RP/LC) and Horizontal Cyan (XNOR/XOR)
function rp_lc_xnor_xor(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // RP is grounded by RC (Mirror Wire true void). XNOR is grounded by XOR (Tension Wire opposite).
    if (rp(a, b) == 1 && xnor(a, b) == 1 && rc(a, b) == 0 && xor(a, b) == 0)
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

