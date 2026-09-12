# differentiable_gates.py

import numpy as np

# ==========================================================
# Every one of the 16 discrete gates has an EXACT smooth
# polynomial equivalent: c0 + c1*a + c2*b + c3*a*b
# It matches the hard gate perfectly at the 4 corners
# (0,0),(0,1),(1,0),(1,1), and blends smoothly in between --
# this is the real technique from "differentiable logic gate
# networks" research.
# ==========================================================
GATE_NAMES = ['tau','con','xor','xnor','and_','nand','or_','nor',
              'mi','mni','ci','cni','lp','lc','rp','rc']

# (c0, c1, c2, c3) for c0 + c1*a + c2*b + c3*a*b
GATE_COEFFS = {
    'tau':  (1, 0, 0, 0),
    'con':  (0, 0, 0, 0),
    'xor':  (0, 1, 1, -2),
    'xnor': (1, -1, -1, 2),
    'and_': (0, 0, 0, 1),
    'nand': (1, 0, 0, -1),
    'or_':  (0, 1, 1, -1),
    'nor':  (1, -1, -1, 1),
    'mi':   (1, -1, 0, 1),
    'mni':  (0, 1, 0, -1),
    'ci':   (1, 0, -1, 1),
    'cni':  (0, 0, 1, -1),
    'lp':   (0, 1, 0, 0),
    'lc':   (1, -1, 0, 0),
    'rp':   (0, 0, 1, 0),
    'rc':   (1, 0, -1, 0),
}
COEFF_MATRIX = np.array([GATE_COEFFS[g] for g in GATE_NAMES])  # shape (16, 4)

def softmax(x):
    e = np.exp(x - np.max(x))
    return e / e.sum()

def soft_junction(a, b, logits):
    """Blend all 16 gates according to softmax(logits), evaluated at (a,b)."""
    probs = softmax(logits)               # (16,)
    basis = np.array([1, a, b, a*b])      # (4,)
    gate_outputs = COEFF_MATRIX @ basis   # (16,) -- each gate's value at (a,b)
    return float(probs @ gate_outputs)    # weighted blend

# ==========================================================
# A small learnable tree: 4 raw inputs -> 2 -> 1 (3 junctions,
# 16 weights each = 48 trainable parameters total)
# ==========================================================
def forward(inputs4, all_logits):
    a, b, c, d = inputs4
    n1 = soft_junction(a, b, all_logits[0])
    n2 = soft_junction(c, d, all_logits[1])
    out = soft_junction(n1, n2, all_logits[2])
    return out

# Target: train it to discover PARITY (XOR of all 4 bits) on its own
def target_fn(inputs4):
    return inputs4[0] ^ inputs4[1] ^ inputs4[2] ^ inputs4[3]

training_data = [((a,b,c,d), target_fn((a,b,c,d)))
                 for a in (0,1) for b in (0,1) for c in (0,1) for d in (0,1)]

def loss_fn(all_logits):
    total = 0.0
    for inputs4, target in training_data:
        pred = forward(inputs4, all_logits)
        total += (pred - target) ** 2
    return total / len(training_data)

# ==========================================================
# Train with plain numerical gradient descent (finite
# differences) -- simple, transparent, easy to trust.
# ==========================================================
rng = np.random.default_rng(0)
# Wider initial spread -- near-uniform softmax washes every junction's
# output toward a flat 0.5, which crushes the gradient through 3 stacked
# layers (a real vanishing-gradient failure mode). Starting with more
# spread gives each junction an early, if uninformed, opinion to refine.
logits = rng.normal(0, 2.0, size=(3, 16))

lr = 20.0
eps = 1e-3
print(f"Initial loss (random gates): {loss_fn(logits):.4f}\n")

for step in range(300):
    grad = np.zeros_like(logits)
    base_loss = loss_fn(logits)
    for i in range(3):
        for j in range(16):
            logits[i, j] += eps
            grad[i, j] = (loss_fn(logits) - base_loss) / eps
            logits[i, j] -= eps
    logits -= lr * grad
    if step % 50 == 0:
        print(f"Step {step:3d}: loss = {loss_fn(logits):.4f}")

print(f"\nFinal loss: {loss_fn(logits):.6f}")

print("\n=== What gate did each junction converge to? ===")
for i, junction_name in enumerate(["junction 1 (a,b)", "junction 2 (c,d)", "center (n1,n2)"]):
    probs = softmax(logits[i])
    best = GATE_NAMES[np.argmax(probs)]
    print(f"{junction_name}: chose '{best}' with {probs.max()*100:.1f}% confidence")


'''
cd /home/claude/logic_test && python3 differentiable_gates.py
Output

Initial loss (random gates): 0.2500

Step   0: loss = 0.2500
Step  50: loss = 0.2500
Step 100: loss = 0.2500
Step 150: loss = 0.2500
Step 200: loss = 0.2500
Step 250: loss = 0.2500

Final loss: 0.250000

=== What gate did each junction converge to? ===
junction 1 (a,b): chose 'or_' with 7.3% confidence
junction 2 (c,d): chose 'nand' with 7.2% confidence
center (n1,n2): chose 'rc' with 7.2% confidence
'''

'''
cd /home/claude/logic_test && python3 -c "
import numpy as np
from differentiable_gates import soft_junction, forward, loss_fn, training_data, GATE_NAMES

rng = np.random.default_rng(0)
logits = rng.normal(0, 0.1, size=(3, 16))

# check gradient magnitude manually
base = loss_fn(logits)
eps = 1e-4
grad_sample = []
for j in range(16):
    logits[0,j] += eps
    g = (loss_fn(logits) - base) / eps
    logits[0,j] -= eps
    grad_sample.append(g)
print('sample gradient at junction 0:', grad_sample)
print('max abs grad:', max(abs(g) for g in grad_sample))
print('base loss:', base)

# check a few individual predictions
for inputs4, target in training_data[:4]:
    pred = forward(inputs4, logits)
    print(inputs4, 'target=', target, 'pred=', pred)
"
Output

Initial loss (random gates): 0.2500

Step   0: loss = 0.2500
Step  50: loss = 0.2500
Step 100: loss = 0.2500
Step 150: loss = 0.2500
Step 200: loss = 0.2500
Step 250: loss = 0.2500

Final loss: 0.250000

=== What gate did each junction converge to? ===
junction 1 (a,b): chose 'or_' with 7.3% confidence
junction 2 (c,d): chose 'nand' with 7.2% confidence
center (n1,n2): chose 'rc' with 7.2% confidence
sample gradient at junction 0: [-3.638380152715115e-06, 3.5679842413927076e-06, 9.426509572918462e-07, -8.707495835480472e-07, 1.279182315627736e-06, -1.3759254846590352e-06, -1.5741291603532659e-06, 1.5436857347950195e-06, -2.0528917454853968e-06, 1.9605966850022583e-06, -2.115942421276884e-06, 2.2839496960358474e-06, -3.232525358498606e-08, 6.192490964451736e-08, 7.654432643278142e-09, 1.2861378628770126e-08]
max abs grad: 3.638380152715115e-06
base loss: 0.25003361959443926
(0, 0, 0, 0) target= 0 pred= 0.4939915035150708
(0, 0, 0, 1) target= 1 pred= 0.494278117234612
(0, 0, 1, 0) target= 1 pred= 0.4943447516262032
(0, 0, 1, 1) target= 0 pred= 0.4944347572544607

'''

'''
Diagnosing why training updates barely move despite the learning rate.

Analyzing why the softmax gradient sensitivity seems far smaller than expected.

Tracing a possible floating-point precision bug in the perturbation.
'''

'''
import numpy as np
from differentiable_gates import soft_junction, GATE_NAMES

logits = np.zeros(16)  # perfectly uniform mixture
out1 = soft_junction(0, 1, logits)
print('output at uniform logits, (a,b)=(0,1):', out1)

logits2 = logits.copy()
logits2[GATE_NAMES.index('xor')] += 0.01  # nudge toward xor
out2 = soft_junction(0, 1, logits2)
print('output after nudging toward xor by 0.01:', out2)
print('difference:', out2 - out1)

logits3 = logits.copy()
logits3[GATE_NAMES.index('xor')] += 5.0  # big nudge
out3 = soft_junction(0, 1, logits3)
print('output after nudging toward xor by 5.0:', out3)
"
Output

Initial loss (random gates): 0.2500

Step   0: loss = 0.2500
Step  50: loss = 0.2500
Step 100: loss = 0.2500
Step 150: loss = 0.2500
Step 200: loss = 0.2500
Step 250: loss = 0.2500

Final loss: 0.250000

=== What gate did each junction converge to? ===
junction 1 (a,b): chose 'or_' with 7.3% confidence
junction 2 (c,d): chose 'nand' with 7.2% confidence
center (n1,n2): chose 'rc' with 7.2% confidence
output at uniform logits, (a,b)=(0,1): 0.5
output after nudging toward xor by 0.01: 0.5003138705681519
difference: 0.0003138705681519083
output after nudging toward xor by 5.0: 0.9510443342266073
'''

'''
Verifying the soft junction function responds correctly to changes.

Tracing vanishing gradients through chained near-uniform junction layers.
'''

# Dedicated to God the Father
# All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
# https://github.com/ChristopherAndrewTopalian
# https://github.com/ChristopherTopalian
# https://sites.google.com/view/CollegeOfScripting

