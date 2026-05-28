// 045_ci_mni_xnor_xor.js

// Node 45: Intersection of Vertical Pink (CI/MNI) and Horizontal Cyan (XNOR/XOR)
function ci_mni_xnor_xor(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // CI is grounded by MNI (Tension). XNOR is grounded by XOR (Tension).
    if (ci(a, b) == 1 && xnor(a, b) == 1 && mni(a, b) == 0 && xor(a, b) == 0)
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

