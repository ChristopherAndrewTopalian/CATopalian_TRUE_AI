# lod_with_lookup_add_delete.py

wordList = [
    {
        'id': 'apple',
        'type': 'noun'
    },

    {
        'id': 'run',
        'type': 'verb'
    }
]

# The Card Catalog: A standard Python dictionary acts as our Map
wordIndex = {}

# Build the index (Storing memory references, not copies)
for word in wordList:
    wordIndex[word['id']] = word

# ADDING DATA
# We create the new dictionary object once
newWord = { 'id': 'jump', 'type': 'verb' }

# We hand the exact same reference to both structures
wordList.append(newWord)           # JS equivalent: push()
wordIndex[newWord['id']] = newWord # JS equivalent: set()

print("After Add - List Length:", len(wordList)) # 3
print("After Add - Dict Size:", len(wordIndex))  # 3


# DELETING DATA
targetId = 'apple'

# Step A: Remove from the Dictionary (Instant O(1) lookup)
# .pop(key, None) acts like Map.delete() - it safely removes it without crashing if missing
wordIndex.pop(targetId, None)

# Step B: Remove from the List (Requires finding the row)
# We use next() and enumerate() to mimic JavaScript's findIndex()
rowIndex = next((i for i, word in enumerate(wordList) if word['id'] == targetId), -1)

if rowIndex != -1:
    del wordList[rowIndex] # JS equivalent: splice(rowIndex, 1)

print("\nAfter Delete - List Length:", len(wordList))  # 2
print("After Delete - Dict Size:", len(wordIndex))     # 2
print("Is apple in Dict?", 'apple' in wordIndex)       # False

####

'''
After Add - List Length: 3
After Add - Dict Size: 3

After Delete - List Length: 2
After Delete - Dict Size: 2
Is apple in Dict? False
'''

####

# Dedicated to God the Father
# All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
# https://github.com/ChristopherTopalian
# https://github.com/ChristopherAndrewTopalian
# https://sites.google.com/view/CollegeOfScripting

