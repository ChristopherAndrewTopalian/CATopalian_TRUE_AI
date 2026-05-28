// 023_ci_mni_nor_and.js

// Node 23: Intersection of Vertical Pink (CI/MNI) and Horizontal Green (AND/NOR)
function ci_mni_and_nor(a, b)
{
    // 1. Horizontal Source | 2. Vertical Source | 3. Horizontal Ground | 4. Vertical Ground
    if (nor(a, b) == 1 && ci(a, b) == 1 && and(a, b) == 0 && mni(a, b) == 0)
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

