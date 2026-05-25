// node_mi_mni_and_nor_intersection.js

function node_mi_mni_and_nor_intersection(a, b)
{
    if (mi(a, b) == 1 && and(a, b) == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}