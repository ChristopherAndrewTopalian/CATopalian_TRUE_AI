// 044_ci_mni_rp_rc.js

// Node 44: Intersection of Vertical Pink (CI/MNI) and Diagonal Orange (RP/RC)
function ci_mni_rp_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (ci(a, b) == 1 && rp(a, b) == 1 && mni(a, b) == 0 && rc(a, b) == 0)
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

