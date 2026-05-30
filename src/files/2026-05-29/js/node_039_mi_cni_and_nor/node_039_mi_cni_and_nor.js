// node_039_mi_cni_and_nor.js

// Node 39: mi_cni_and_nor
function node_039_mi_cni_and_nor(a, b)
{
    // 1. Horizontal Source | 2. Vertical Source | 3. Horizontal Ground | 4. Vertical Ground
    if (and(a, b) == 1 && mi(a, b) == 1 && nor(a, b) == 0 && cni(a, b) == 0)
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

