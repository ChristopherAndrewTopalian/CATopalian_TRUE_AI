# logic_gates.py

# ==========================================
# 16 BASE GATES (SYNAPTIC EDGES)
# ==========================================

def tau(a, b):
    if (a == 0 and b == 0) or (a == 0 and b == 1) or (a == 1 and b == 0) or (a == 1 and b == 1):
        return 1
    return 1

def con(a, b):
    if (a == 0 and b == 0) or (a == 0 and b == 1) or (a == 1 and b == 0) or (a == 1 and b == 1):
        return 0
    return 0

def xor(a, b):
    if (a == 1 and b == 0) or (a == 0 and b == 1):
        return 1
    return 0

def xnor(a, b):
    if (a == 0 and b == 0) or (a == 1 and b == 1):
        return 1
    return 0

# Python reserved keyword: renamed to and_
def and_(a, b):
    if a == 1 and b == 1:
        return 1
    return 0

def nand(a, b):
    if a == 0 or b == 0:
        return 1
    return 0

# Python reserved keyword: renamed to or_
def or_(a, b):
    if a == 1 or b == 1:
        return 1
    return 0

def nor(a, b):
    if a == 0 and b == 0:
        return 1
    return 0

def mi(a, b):
    if a == 0 or b == 1:
        return 1
    return 0

def mni(a, b):
    if a == 1 and b == 0:
        return 1
    return 0

def ci(a, b):
    if a == 1 or b == 0:
        return 1
    return 0

def cni(a, b):
    if a == 0 and b == 1:
        return 1
    return 0

def lp(a, b):
    if a == 1:
        return 1
    return 0

def lc(a, b):
    if a == 0:
        return 1
    return 0

def rp(a, b):
    if (a == 0 and b == 1) or (a == 1 and b == 1):
        return 1
    return 0

def rc(a, b):
    if (a == 0 and b == 0) or (a == 1 and b == 0):
        return 1
    return 0


# ==========================================
# COMBINATIONAL GATES (SPATIAL CYLINDERS)
# ==========================================

# Node 17
def node_017_tau_con_mi_ci(a, b):
    if tau(a, b) == 1 and con(a, b) == 0 and mi(a, b) == 1 and ci(a, b) == 1:
        return 1
    return 0

# Node 18
def node_018_rp_lc_xnor_xor(a, b):
    if rp(a, b) == 1 and xnor(a, b) == 1 and rc(a, b) == 0 and xor(a, b) == 0:
        return 1
    return 0

# Node 19
def node_019_tau_con_cni_mni(a, b):
    if tau(a, b) == 1 and cni(a, b) == 1 and con(a, b) == 0 and ci(a, b) == 0:
        return 1
    return 0

# Node 20
def node_020_lp_rc_xor_xnor(a, b):
    if lp(a, b) == 1 and rc(a, b) == 1 and xor(a, b) == 1 and lc(a, b) == 0 and rp(a, b) == 0 and xnor(a, b) == 0:
        return 1
    return 0

# Node 21
def node_021_tau_con_and_nor(a, b):
    if tau(a, b) == 1 and and_(a, b) == 1 and con(a, b) == 0 and nor(a, b) == 0:
        return 1
    return 0

# Node 22
def node_022_ci_cni_nor_and(a, b):
    if nor(a, b) == 1 and ci(a, b) == 1 and and_(a, b) == 0 and cni(a, b) == 0:
        return 1
    return 0

# Node 23
def node_023_ci_mni_nor_and(a, b):
    if nor(a, b) == 1 and ci(a, b) == 1 and and_(a, b) == 0 and mni(a, b) == 0:
        return 1
    return 0

# Node 24
def node_024_nor_nand_rp_lp(a, b):
    if nor(a, b) == 1 and rp(a, b) == 1 and nand(a, b) == 0 and rc(a, b) == 0:
        return 1
    return 0

# Node 25
def node_025_nor_nand_rp_rc(a, b):
    if nor(a, b) == 1 and rp(a, b) == 1 and or_(a, b) == 0 and rc(a, b) == 0:
        return 1
    return 0

# Node 26
def node_026_nand_nor_xnor_xor(a, b):
    if nand(a, b) == 1 and xnor(a, b) == 1 and and_(a, b) == 0 and xor(a, b) == 0:
        return 1
    return 0

# Node 27
def node_027_nor_nand_lp_lc(a, b):
    if nor(a, b) == 1 and lp(a, b) == 1 and or_(a, b) == 0 and lc(a, b) == 0:
        return 1
    return 0

# Node 28
def node_028_nor_nand_lc_rc(a, b):
    if nor(a, b) == 1 and rc(a, b) == 1 and or_(a, b) == 0 and rp(a, b) == 0:
        return 1
    return 0

# Node 29
def node_029_ci_mni_or_nand(a, b):
    if ci(a, b) == 1 and nand(a, b) == 1 and mni(a, b) == 0 and and_(a, b) == 0:
        return 1
    return 0

# Node 30
def node_030_mi_mni_or_nand(a, b):
    if mni(a, b) == 1 and nand(a, b) == 1 and mi(a, b) == 0 and and_(a, b) == 0:
        return 1
    return 0

# Node 31
def node_031_tau_con_or_nand(a, b):
    if tau(a, b) == 1 and or_(a, b) == 1 and con(a, b) == 0 and nor(a, b) == 0:
        return 1
    return 0

# Node 32
def node_032_ci_cni_or_nand(a, b):
    if ci(a, b) == 1 and nand(a, b) == 1 and cni(a, b) == 0 and and_(a, b) == 0:
        return 1
    return 0

# Node 33
def node_033_mi_cni_or_nand(a, b):
    if mi(a, b) == 1 and or_(a, b) == 1 and cni(a, b) == 0 and nor(a, b) == 0:
        return 1
    return 0

# Node 34
def node_034_and_or_rc_lc(a, b):
    if and_(a, b) == 1 and lc(a, b) == 1 and nand(a, b) == 0 and lp(a, b) == 0:
        return 1
    return 0

# Node 35
def node_035_and_or_rp_rc(a, b):
    if and_(a, b) == 1 and rp(a, b) == 1 and nand(a, b) == 0 and rc(a, b) == 0:
        return 1
    return 0

# Node 36
def node_036_and_or_xor_xnor(a, b):
    if and_(a, b) == 1 and xor(a, b) == 1 and nand(a, b) == 0 and xnor(a, b) == 0:
        return 1
    return 0

# Node 37
def node_037_and_or_lp_lc(a, b):
    if and_(a, b) == 1 and lp(a, b) == 1 and or_(a, b) == 0 and lc(a, b) == 0:
        return 1
    return 0

# Node 38
def node_038_lp_rp_and_or(a, b):
    if lp(a, b) == 1 and and_(a, b) == 1 and rp(a, b) == 0 and or_(a, b) == 0:
        return 1
    return 0

# Node 39
def node_039_mi_cni_and_nor(a, b):
    if and_(a, b) == 1 and mi(a, b) == 1 and nor(a, b) == 0 and cni(a, b) == 0:
        return 1
    return 0

# Node 40
def node_040_mi_mni_and_nor(a, b):
    if and_(a, b) == 1 and mi(a, b) == 1 and nor(a, b) == 0 and mni(a, b) == 0:
        return 1
    return 0

# Node 41
def node_041_tau_con_lp_rp(a, b):
    if tau(a, b) == 1 and lp(a, b) == 1 and con(a, b) == 0 and lc(a, b) == 0:
        return 1
    return 0

# Node 42
def node_042_ci_cni_rp_lp(a, b):
    if ci(a, b) == 1 and rp(a, b) == 1 and cni(a, b) == 0 and rc(a, b) == 0:
        return 1
    return 0

# Node 43
def node_043_nor_or_ci_mni_rp_lp(a, b):
    if nor(a, b) == 1 and ci(a, b) == 1 and rp(a, b) == 1 and or_(a, b) == 0 and mni(a, b) == 0 and rc(a, b) == 0:
        return 1
    return 0

# Node 44
def node_044_ci_mni_rp_rc(a, b):
    if ci(a, b) == 1 and rp(a, b) == 1 and mni(a, b) == 0 and rc(a, b) == 0:
        return 1
    return 0

# Node 45
def node_045_ci_mni_xnor_xor(a, b):
    if ci(a, b) == 1 and xnor(a, b) == 1 and mni(a, b) == 0 and xor(a, b) == 0:
        return 1
    return 0

# Node 46
def node_046_ci_mni_lc_lp(a, b):
    if ci(a, b) == 1 and lp(a, b) == 1 and mni(a, b) == 0 and lc(a, b) == 0:
        return 1
    return 0

# Node 47
def node_047_and_nand_ci_mni_lc_rc(a, b):
    if nand(a, b) == 1 and ci(a, b) == 1 and rc(a, b) == 1 and and_(a, b) == 0 and mni(a, b) == 0 and rp(a, b) == 0:
        return 1
    return 0

# Node 48
def node_048_mi_mni_lc_rc(a, b):
    if mni(a, b) == 1 and rc(a, b) == 1 and mi(a, b) == 0 and rp(a, b) == 0:
        return 1
    return 0

# Node 49
def node_049_tau_con_lc_rc(a, b):
    if tau(a, b) == 1 and lc(a, b) == 1 and con(a, b) == 0 and lp(a, b) == 0:
        return 1
    return 0

# Node 50
def node_050_ci_cni_rc_lc(a, b):
    if ci(a, b) == 1 and rc(a, b) == 1 and cni(a, b) == 0 and rp(a, b) == 0:
        return 1
    return 0

# Node 51
def node_051_nor_or_mi_cni_lc_rc(a, b):
    if nor(a, b) == 1 and mi(a, b) == 1 and lc(a, b) == 1 and or_(a, b) == 0 and cni(a, b) == 0 and lp(a, b) == 0:
        return 1
    return 0

# Node 52
def node_052_mi_cni_rc_rp(a, b):
    if mi(a, b) == 1 and rp(a, b) == 1 and cni(a, b) == 0 and rc(a, b) == 0:
        return 1
    return 0

# Node 53
def node_053_mi_cni_xor_xnor(a, b):
    if mi(a, b) == 1 and xor(a, b) == 1 and cni(a, b) == 0 and xnor(a, b) == 0:
        return 1
    return 0

# Node 54
def node_054_mi_cni_lp_lc(a, b):
    if mi(a, b) == 1 and lp(a, b) == 1 and cni(a, b) == 0 and lc(a, b) == 0:
        return 1
    return 0

# Node 55
def node_055_and_nand_mi_cni_lp_rp(a, b):
    if and_(a, b) == 1 and mi(a, b) == 1 and lp(a, b) == 1 and nand(a, b) == 0 and cni(a, b) == 0 and rp(a, b) == 0:
        return 1
    return 0

# Node 56
def node_056_mi_mni_lp_rp(a, b):
    if mi(a, b) == 1 and lp(a, b) == 1 and mni(a, b) == 0 and lc(a, b) == 0:
        return 1
    return 0

####

# Dedicated to God the Father
# All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
# https://github.com/ChristopherAndrewTopalian
# https://github.com/ChristopherTopalian
# https://sites.google.com/view/CollegeOfScripting

