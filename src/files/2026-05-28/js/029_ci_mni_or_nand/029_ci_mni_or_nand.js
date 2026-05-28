// 029_ci_mni_or_nand.js

// Node 29: Intersection of Vertical Pink (CI/MNI) and Horizontal Green (OR/NAND)
function ci_mni_or_nand(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (ci(a, b) == 1 && nand(a, b) == 1 && mni(a, b) == 0 && and(a, b) == 0)
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

