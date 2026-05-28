// 022_ci_cni_nor_and.js

// Node 22: Intersection of Diagonal Pink (CI/CNI) and Horizontal Green (AND/NOR)
function ci_cni_and_nor(a, b)
{
    // 1. Horizontal Source | 2. Diagonal Source | 3. Horizontal Ground | 4. Diagonal Ground
    if (nor(a, b) == 1 && ci(a, b) == 1 && and(a, b) == 0 && cni(a, b) == 0)
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

