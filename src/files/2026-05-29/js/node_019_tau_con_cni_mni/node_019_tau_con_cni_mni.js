// node_019_tau_con_cni_mni.js

// Node 19: Intersection of Vertical Cyan (Tautology/Contradiction) and Horizontal Pink (CNI/MNI)
function node_019_tau_con_cni_mni(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (tau(a, b) == 1 && cni(a, b) == 1 && con(a, b) == 0 && ci(a, b) == 0)
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

