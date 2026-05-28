// CATopalian_TRUE_AI.js

// 001_tau.js

function tau(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        // One or Both False or True
        return 1;
    }
    else
    {
        return 1;
    }
}

//----//

/*
TAUTOLOGY
1111

A  B
0  0  =  1
0  1  =  1
1  0  =  1
1  1  =  1

Opposite: CONTRADICTION
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 002_con.js

function con(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        return 0;
    }
    else
    {
        return 0;
    }
}

//----//

/*
CONTRADICTION
0000

A B
0  0  =  0
0  1  =  0
1  0  =  0
1  1  =  0

Opposite: TAUTOLOGY
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 003_xor.js

function xor(a, b)
{
    if ((a == 1 && b == 0) ||
        (a == 0 && b == 1))
    {
        // A True or B True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
XOR
0110

A B
0  0  =  0
0  1  =  1
1  0  =  1
1  1  =  0

Opposite: XNOR
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 004_xnor.js

function xnor(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 1))
    {
        // Both False or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
XNOR
1001

A  B
0  0  =  1
0  1  =  0
1  0  =  0
1  1  =  1

Opposite: XOR
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 005_and.js

function and(a, b)
{
    if (a == 1 && b == 1)
    {
        // Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
AND
0001

A  B
0  0  =  0
0  1  =  0
1  0  =  0
1  1  =  1

Opposite: NAND
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 006_nand.js

function nand(a, b)
{
    if (a == 0 || b == 0)
    {
        // Both False or A True or B True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
NAND
1110

A  B
0  0  =  1
0  1  =  1
1  0  =  1
1  1  =  0

Opposite: AND
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 007_or.js

function or(a, b)
{
    if (a == 1 || b == 1)
    {
        // One or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
OR
0111

A B
0  0  =  0
0  1  =  1
1  0  =  1
1  1  =  1

Opposite: NOR
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 008_nor.js

function nor(a, b)
{
    if (a == 0 && b == 0)
    {
        // Both False
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
NOR
1000

A B
0  0  =  1
0  1  =  0
1  0  =  0
1  1  =  0

Opposite: OR
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 009_mi.js

function mi(a, b)
{
    if (a == 0 || b == 1)
    {
        // Both False or B True or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
MI
1101

A  B
0  0  =  1
0  1  =  1
1  0  =  0
1  1  =  1

Opposite: MNI
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 010_mni.js

function mni(a, b)
{
    if (a == 1 && b == 0)
    {
        // A True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
MNI
0010

A B
0  0  =  0
0  1  =  0
1  0  =  1
1  1  =  0

Opposite: MI
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 011_ci.js

function ci(a, b)
{
    if (a == 1 || b == 0)
    {
        // Both False or A True or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
CI
1011

A B
0  0  =  1
0  1  =  0
1  0  =  1
1  1  =  1

Opposite: CNI
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 012_cni.js

function cni(a, b)
{
    if (a == 0 && b == 1)
    {
        // B True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
CNI
0100

A B
0  0  =  0
0  1  =  1
1  0  =  0
1  1  =  0

Opposite: CI
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 013_lp.js

function lp(a, b)
{
    if (a == 1)
    {
        // A True or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
LP
0011

A  B
0  0  =  0
0  1  =  0
1  0  =  1
1  1  =  1

Opposite: LC
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 014_lc.js

function lc(a, b)
{
    if (a == 0)
    {
        // Both False or B True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
LC
1100

A B
0  0  =  1
0  1  =  1
1  0  =  0
1  1  =  0

Opposite: LP
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 015_rp.js

function rp(a, b)
{
    if ((a == 0 && b == 1) ||
        (a == 1 && b == 1))
    {
        // B True or Both True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
RP
0101

A  B
0  0  =  0
0  1  =  1
1  0  =  0
1  1  =  1

Opposite: RC
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// 016_rc.js

function rc(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 0))
    {
        // Both False or A True
        return 1;
    }
    else
    {
        return 0;
    }
}

//----//

/*
RC
1010

A B
0  0  =  1
0  1  =  0
1  0  =  1
1  1  =  0

Opposite: RP
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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

// 018_rp_lc_xnor_xor.js

// Node 18: Intersection of Vertical Orange (RP/LC) and Horizontal Cyan (XNOR/XOR)
function rp_lc_xnor_xor(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // RP is grounded by RC (Mirror Wire true void). XNOR is grounded by XOR (Tension Wire opposite).
    if (rp(a, b) == 1 && xnor(a, b) == 1 && rc(a, b) == 0 && xor(a, b) == 0)
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

// 019_tau_con_cni_mni.js

// Node 19: Intersection of Vertical Cyan (Tautology/Contradiction) and Horizontal Pink (CNI/MNI)
function tau_con_cni_mni(a, b)
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

// 020_lp_rc_xor_xnor.js

// Node 20: Intersection of Vertical Orange (LP/RC) and Horizontal Cyan (XOR/XNOR)
function lp_rc_xor_xnor(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // LP is grounded by LC. RC is grounded by RP. XOR is grounded by XNOR (Tension).
    if (lp(a, b) == 1 && rc(a, b) == 1 && xor(a, b) == 1 && lc(a, b) == 0 && rp(a, b) == 0 && xnor(a, b) == 0)
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

// 021_tau_con_and_nor.js

// Node 21: Intersection of Vertical Cyan (Tautology/Contradiction) and Horizontal Green (AND/NOR)
function tau_con_and_nor(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // TAU is grounded by CON (Prime Meridian true void). AND is grounded by NOR (Tension Wire opposite).
    if (tau(a, b) == 1 && and(a, b) == 1 && con(a, b) == 0 && nor(a, b) == 0)
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

// 024_nor_nand_rp_lp.js

// Node 24: Intersection of Vertical Green (NOR/NAND) and Horizontal Orange (RP/LP)
function nor_nand_rp_lp(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (nor(a, b) == 1 && rp(a, b) == 1 && nand(a, b) == 0 && rc(a, b) == 0)
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

// 025_nor_nand_rp_rc.js

// Node 25: Intersection of Vertical Green (NOR/NAND) and Diagonal Orange (RP/RC)
function nor_nand_rp_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // NOR is grounded by OR (Mirror Wire). RP is grounded by RC (Tension Wire).
    if (nor(a, b) == 1 && rp(a, b) == 1 && or(a, b) == 0 && rc(a, b) == 0)
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

// 026_nand_nor_xnor_xor.js

// Node 26: Intersection of Vertical Green (NOR/NAND) and Horizontal Cyan (XNOR/XOR)
function nand_nor_xnor_xor(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // NAND is grounded by AND (Mirror Wire true void). XNOR is grounded by XOR (Tension Wire opposite).
    if (nand(a, b) == 1 && xnor(a, b) == 1 && and(a, b) == 0 && xor(a, b) == 0)
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

// 027_nor_nand_lp_lc.js

// Node 27: Intersection of Vertical Green (NOR/NAND) and Diagonal Orange (LP/LC)
function nor_nand_lp_lc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // NOR is grounded by OR (Mirror Wire). LP is grounded by LC (Tension Wire).
    if (nor(a, b) == 1 && lp(a, b) == 1 && or(a, b) == 0 && lc(a, b) == 0)
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

// 028_nor_nand_lc_rc.js

// Node 28: Intersection of Vertical Green (NOR/NAND) and Horizontal Orange (LC/RC)
function nor_nand_lc_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // NOR is grounded by OR (Mirror Wire true void). RC is grounded by RP (Mirror Wire true void).
    if (nor(a, b) == 1 && rc(a, b) == 1 && or(a, b) == 0 && rp(a, b) == 0)
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

// 030_mi_mni_or_nand.js

// Node 30: Intersection of Diagonal Pink (MI/MNI) and Horizontal Green (OR/NAND)
function mi_mni_or_nand(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (mni(a, b) == 1 && nand(a, b) == 1 && mi(a, b) == 0 && and(a, b) == 0)
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

// 031_tau_con_or_nand.js

// Node 31: Intersection of Vertical Cyan (Tautology/Contradiction) and Horizontal Green (OR/NAND)
function tau_con_or_nand(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (tau(a, b) == 1 && or(a, b) == 1 && con(a, b) == 0 && nor(a, b) == 0)
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

// 032_ci_cni_or_nand.js

// Node 32: Intersection of Diagonal Pink (CI/CNI) and Horizontal Green (OR/NAND)
function ci_cni_or_nand(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (ci(a, b) == 1 && nand(a, b) == 1 && cni(a, b) == 0 && and(a, b) == 0)
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

// 033_mi_cni_or_nand.js

// Node 33: Intersection of Vertical Pink (MI/CNI) and Horizontal Green (OR/NAND)
function mi_cni_or_nand(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // MI is grounded by CNI (Tension Wire opposite). OR is grounded by NOR (Mirror Wire true void).
    if (mi(a, b) == 1 && or(a, b) == 1 && cni(a, b) == 0 && nor(a, b) == 0)
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

// 034_and_or_rc_lc.js

// Node 34: Intersection of Vertical Green (AND/OR) and Horizontal Orange (RC/LC)
function and_or_rc_lc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // AND is grounded by NAND (Mirror Wire true void). LC is grounded by LP (its exact mathematical opposite).
    if (and(a, b) == 1 && lc(a, b) == 1 && nand(a, b) == 0 && lp(a, b) == 0)
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

// 035_and_or_rp_rc.js

// Node 35: Intersection of Vertical Green (AND/OR) and Diagonal Orange (RP/RC)
function and_or_rp_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // AND is grounded by NAND (Mirror Wire true void). RP is grounded by RC (Tension Wire opposite).
    if (and(a, b) == 1 && rp(a, b) == 1 && nand(a, b) == 0 && rc(a, b) == 0)
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

// 036_and_or_xor_xnor.js

// Node 36: Intersection of Vertical Green (AND/OR) and Horizontal Cyan (XOR/XNOR)
function and_or_xor_xnor(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // AND is grounded by NAND (Mirror Wire true void). XOR is grounded by XNOR (Tension Wire opposite).
    if (and(a, b) == 1 && xor(a, b) == 1 && nand(a, b) == 0 && xnor(a, b) == 0)
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

// 037_and_or_lp_lc.js

// Node 37: Intersection of Vertical Green (AND/OR) and Diagonal Orange (LP/LC)
function and_or_lp_lc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (and(a, b) == 1 && lp(a, b) == 1 && or(a, b) == 0 && lc(a, b) == 0)
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

// 038_lp_rp_and_or.js

// Node 038: Intersection of Horizontal Orange (LP/RP) and Vertical Green (AND/OR)
function lp_rp_and_or(a, b)
{
    // 1. Horizontal Source | 2. Vertical Source | 3. Horizontal Ground | 4. Vertical Ground
    if (lp(a, b) == 1 && and(a, b) == 1 && rp(a, b) == 0 && or(a, b) == 0)
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

// 039_mi_cni_and_nor.js

// Node 39: mi_cni_and_nor
function mi_cni_and_nor(a, b)
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

// 040_mi_mni_and_nor.js

// Node 40: Intersection of Diagonal Pink (MI/MNI) and Horizontal Green (AND/NOR)
function mi_mni_and_nor(a, b)
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

// 041_tau_con_lp_rp.js

// Node 41: Intersection of Vertical Cyan (Tautology/Contradiction) and Horizontal Orange (LP/RP)
function tau_con_lp_rp(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // We ground TAU with CON. We ground LP with LC (its true mathematical opposite).
    if (tau(a, b) == 1 && lp(a, b) == 1 && con(a, b) == 0 && lc(a, b) == 0)
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

// 042_ci_cni_rp_lp.js

// Node 42: Intersection of Pink Diagonal (CI/CNI) and Orange Horizontal (RP/LP)
function ci_cni_rp_lp(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // We ground CI with CNI. We ground RP with RC (its true mathematical opposite).
    if (ci(a, b) == 1 && rp(a, b) == 1 && cni(a, b) == 0 && rc(a, b) == 0)
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

// 043_nor_or_ci_mni_rp_lp.js

// Node 43: Intersection of Vertical Pink (CI/MNI), Diagonal Green (NOR/OR), and Horizontal Orange (RP/LP)
function nor_or_ci_mni_rp_lp(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (nor(a, b) == 1 && ci(a, b) == 1 && rp(a, b) == 1 && or(a, b) == 0 && mni(a, b) == 0 && rc(a, b) == 0)
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

// 046_ci_mni_lc_lp.js

// Node 46: Intersection of Vertical Pink (CI/MNI) and Diagonal Orange (LC/LP)
function ci_mni_lc_lp(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (ci(a, b) == 1 && lp(a, b) == 1 && mni(a, b) == 0 && lc(a, b) == 0)
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

// 047_and_nand_ci_mni_lc_rc.js

// Node 47: Intersection of Vertical Pink (CI/MNI), Horizontal Orange (LC/RC), and Diagonal Green (NAND/AND)
function and_nand_ci_mni_lc_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // NAND is grounded by AND (Tension). CI is grounded by MNI (Tension). RC is grounded by RP (Mirror Wire true void).
    if (nand(a, b) == 1 && ci(a, b) == 1 && rc(a, b) == 1 && and(a, b) == 0 && mni(a, b) == 0 && rp(a, b) == 0)
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

// 048_mi_mni_lc_rc.js

// Node 48: Intersection of Diagonal Pink (MI/MNI) and Horizontal Orange (LC/RC)
function mi_mni_lc_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // MNI is grounded by MI (Tension). RC is grounded by RP (Mirror Wire true void).
    if (mni(a, b) == 1 && rc(a, b) == 1 && mi(a, b) == 0 && rp(a, b) == 0)
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

// 049_tau_con_lc_rc.js

// Node 49: Intersection of Vertical Cyan (Tautology/Contradiction) and Horizontal Orange (LC/RC)
function tau_con_lc_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (tau(a, b) == 1 && lc(a, b) == 1 && con(a, b) == 0 && lp(a, b) == 0)
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

// 050_ci_cni_rc_lc.js

// Node 50: Intersection of Diagonal Pink (CI/CNI) and Horizontal Orange (RC/LC)
function ci_cni_rc_lc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // CI is grounded by CNI (Tension). RC is grounded by RP (Mirror Wire true void).
    if (ci(a, b) == 1 && rc(a, b) == 1 && cni(a, b) == 0 && rp(a, b) == 0)
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

// 051_nor_or_mi_cni_lc_rc.js

// Node 51: Intersection of Vertical Pink (MI/CNI), Horizontal Orange (LC/RC), and Diagonal Green (NOR/OR)
function nor_or_mi_cni_lc_rc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // MI is grounded by CNI (Tension). NOR is grounded by OR (Tension). LC is grounded by LP (Mirror Wire true void).
    if (nor(a, b) == 1 && mi(a, b) == 1 && lc(a, b) == 1 && or(a, b) == 0 && cni(a, b) == 0 && lp(a, b) == 0)
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

// 052_mi_cni_rc_rp.js

// Node 52: Intersection of Vertical Pink (MI/CNI) and Diagonal Orange (RC/RP)
function mi_cni_rc_rp(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (mi(a, b) == 1 && rp(a, b) == 1 && cni(a, b) == 0 && rc(a, b) == 0)
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

// 054_mi_cni_lp_lc.js

// Node 54: Intersection of Vertical Pink (MI/CNI) and Diagonal Orange (LP/LC)
function mi_cni_lp_lc(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    if (mi(a, b) == 1 && lp(a, b) == 1 && cni(a, b) == 0 && lc(a, b) == 0)
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

// 055_and_nand_mi_cni_lp_rp.js

// Node 55: Intersection of Vertical Pink (MI/CNI), Horizontal Orange (LP/RP), and Green (AND/NAND)
function and_nand_mi_cni_lp_rp(a, b)
{
    // 1. Sources (High Potential) | 2. Grounds (Zero Potential)
    if (and(a, b) == 1 && mi(a, b) == 1 && lp(a, b) == 1 && nand(a, b) == 0 && cni(a, b) == 0 && rp(a, b) == 0)
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

// 056_mi_mni_lp_rp.js

// Node 56: Intersection of Pink Diagonal (MI/MNI) and Orange Horizontal (LP/RP)
function mi_mni_lp_rp(a, b)
{
    // 1. Sources (High Potential) | 2. True Voids (Zero Potential Grounds)
    // We ground MI with MNI. We ground LP with LC (its true mathematical opposite).
    if (mi(a, b) == 1 && lp(a, b) == 1 && mni(a, b) == 0 && lc(a, b) == 0)
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

