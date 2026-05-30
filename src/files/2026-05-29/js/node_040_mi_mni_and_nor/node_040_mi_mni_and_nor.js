// node_040_mi_mni_and_nor.js

// Node 40: Intersection of Diagonal Pink (MI/MNI) and Horizontal Green (AND/NOR)
function node_040_mi_mni_and_nor(a, b)
{
    // 1. Horizontal Source | 2. Diagonal Source | 3. Horizontal Ground | 4. Diagonal Ground
    if (and(a, b) == 1 && mi(a, b) == 1 && nor(a, b) == 0 && mni(a, b) == 0)
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

