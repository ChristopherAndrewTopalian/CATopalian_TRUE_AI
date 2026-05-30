// node_038_lp_rp_and_or.js

// Node 038: Intersection of Horizontal Orange (LP/RP) and Vertical Green (AND/OR)
function node_038_lp_rp_and_or(a, b)
{
    // 1. Horizontal Source | 2. Vertical Source | 3. Horizontal Ground | 4. Vertical Ground
    if (lp(a, b) == 1 && and(a, b) == 1 && rp(a, b) == 0 && or(a, b) == 0)
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

