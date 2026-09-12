"""
Tesseract (4D Hypercube) Graph Structure
==========================================
The 16 "logic gate" nodes = the 16 vertices of a 4-cube.
Each vertex is a 4-bit binary label (0000 - 1111).
Two vertices are connected exactly when their labels differ in ONE bit.
"""

from itertools import combinations

# ---------------------------------------------------------------
# 1. Generate the 16 vertices (as 4-bit tuples)
# ---------------------------------------------------------------
vertices = [tuple((i >> b) & 1 for b in range(4)) for i in range(16)]
print("16 vertices:", vertices[:4], "...")

# ---------------------------------------------------------------
# 2. Build edges: connect vertices that differ in exactly 1 bit
#    (this naturally produces all 32 edges of the tesseract)
# ---------------------------------------------------------------
def hamming_distance(a, b):
    return sum(x != y for x, y in zip(a, b))

edges = []
for v1, v2 in combinations(vertices, 2):
    if hamming_distance(v1, v2) == 1:
        edges.append((v1, v2))

print(f"Generated {len(edges)} edges")  # -> 32, matches the tesseract exactly

# ---------------------------------------------------------------
# 3. The 8 cubic "cells" of a tesseract: fix ONE coordinate to 0 or 1,
#    let the other 3 vary freely. Each choice = one cube-shaped cell.
# ---------------------------------------------------------------
cells = []
for dim in range(4):          # which of the 4 axes to fix
    for value in (0, 1):      # fix it to 0 or to 1
        cell = tuple(v for v in vertices if v[dim] == value)
        cells.append((dim, value, cell))

print(f"Generated {len(cells)} cells")  # -> 8

# ---------------------------------------------------------------
# 4. Put it all together as a graph (adjacency list), same
#    fundamental data structure as before -- just structured edges.
#    Here EDGES and CELLS are each given their own node identity
#    (a "cell complex"), not just relationships between vertices.
#    16 vertices + 32 edges + 8 cells = 56 "nodes" in the full complex.
# ---------------------------------------------------------------
graph = {f"V{i}": [] for i in range(16)}

for i, (v1, v2) in enumerate(edges):
    i1, i2 = vertices.index(v1), vertices.index(v2)
    edge_name = f"E{i}"
    graph[edge_name] = [f"V{i1}", f"V{i2}"]   # edge links to its 2 endpoints
    graph[f"V{i1}"].append(edge_name)
    graph[f"V{i2}"].append(edge_name)

for i, (dim, value, cell) in enumerate(cells):
    cell_name = f"C{i}"
    members = [f"V{vertices.index(v)}" for v in cell]
    graph[cell_name] = members
    for m in members:
        graph[m].append(cell_name)

# ---------------------------------------------------------------
# 5. Add the center/hub node, connected to all 56 -- "coning" the graph.
#    This collapses the network's diameter down to 2 hops max.
# ---------------------------------------------------------------
graph["CENTER"] = list(graph.keys())
for node in list(graph.keys()):
    if node != "CENTER":
        graph[node].append("CENTER")

print(f"Total nodes including center: {len(graph)}")  # -> 57
print("CENTER connects to:", len(graph["CENTER"]), "nodes")

# ---------------------------------------------------------------
# For a neural net: this adjacency structure becomes a *connectivity
# mask* over your weight matrix -- weight[i][j] only exists/trains
# if graph[i] contains j. Everything else is forced to zero.
# This is exactly how sparse / graph neural networks are built.
# ---------------------------------------------------------------

# Dedicated to God the Father
# All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
# https://github.com/ChristopherAndrewTopalian
# https://github.com/ChristopherTopalian
# https://sites.google.com/view/CollegeOfScripting