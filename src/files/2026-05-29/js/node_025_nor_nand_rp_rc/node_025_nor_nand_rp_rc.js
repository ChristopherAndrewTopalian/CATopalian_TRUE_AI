// node_025_nor_nand_rp_rc.js

// Node 25: Intersection of Vertical Green (NOR/NAND) and Diagonal Orange (RP/RC)
function node_025_nor_nand_rp_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // NOR is grounded by OR (Mirror Wire). RP is grounded by RC (Tension Wire).
    if (nor(a, b) == 1 && rp(a, b) == 1 && or(a, b) == 0 && rc(a, b) == 0)
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

