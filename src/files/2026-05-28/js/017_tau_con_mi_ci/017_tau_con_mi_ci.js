// 017_tau_con_mi_ci.js

// Node 17: tau_con_mi_ci
function tau_con_mi_ci(a, b)
{
    // 1. Power | 2. Ground | 3. Left Wire | 4. Right Wire
    if (tau(a, b) == 1 && con(a, b) == 0 && mi(a, b) == 1 && ci(a, b) == 1)
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

