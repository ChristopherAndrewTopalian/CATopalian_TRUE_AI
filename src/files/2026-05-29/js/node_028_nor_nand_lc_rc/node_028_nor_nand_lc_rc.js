// node_028_nor_nand_lc_rc.js

// Node 28: Intersection of Vertical Green (NOR/NAND) and Horizontal Orange (LC/RC)
function node_028_nor_nand_lc_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // NOR is grounded by OR (Mirror Wire true void). RC is grounded by RP (Mirror Wire true void).
    if (nor(a, b) == 1 && rc(a, b) == 1 && or(a, b) == 0 && rp(a, b) == 0)
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

