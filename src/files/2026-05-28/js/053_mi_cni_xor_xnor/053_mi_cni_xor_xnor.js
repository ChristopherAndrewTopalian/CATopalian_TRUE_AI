// 053_mi_cni_xor_xnor.js

// Node 53: Intersection of Vertical Pink (MI/CNI) and Horizontal Cyan (XOR/XNOR)
function mi_cni_xor_xnor(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (mi(a, b) == 1 && xor(a, b) == 1 && cni(a, b) == 0 && xnor(a, b) == 0)
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

