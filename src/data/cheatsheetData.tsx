export interface CodeExample {
  code: string;
  description?: string;
}

export interface Section {
  id: string;
  title: string;
  examples: CodeExample[];
}

export const sections: Section[] = [
  {
    id: 'primitive-types',
    title: 'Primitive Types',
    examples: [
      {
        description: 'Variables',
        code: `a = 1     # integer
b = 1.1   # float
c = 1 + 2j  # complex
d = "a"   # string
e = True  # boolean`,
      },
      {
        description: 'Escape Sequences',
        code: `\\"    # Double quote
\\'    # Single quote
\\\\    # Backslash
\\n    # Newline`,
      },
      {
        description: 'Numeric Functions',
        code: `round(x)  # Round to nearest integer
abs(x)    # Absolute value`,
      },
      {
        description: 'Type Conversion',
        code: `int(x)    # Convert to integer
float(x)  # Convert to float
bool(x)   # Convert to boolean
string(x) # Convert to string`,
      },
      {
        description: 'Falsy Values',
        code: `0      # Zero
""     # Empty string
None   # None value`,
      },
    ],
  },
  {
    id: 'strings',
    title: 'Strings',
    examples: [
      {
        description: 'Basics',
        code: `x = "Python"
len(x)     # Length of string
x[0]       # First character
x[-1]      # Last character
x[0:3]     # Slice (first 3 characters)`,
      },
      {
        description: 'String Methods',
        code: `x.upper()            # Convert to uppercase
x.lower()            # Convert to lowercase
x.title()            # Capitalize first letter of each word
x.strip()            # Remove whitespace
x.find("p")          # Find substring (returns index)
x.replace("a", "b")  # Replace substring
"a" in x             # Check if substring exists`,
      },
      {
        description: 'Formatted Strings',
        code: `name = f"{first} {last}"  # f-string formatting`,
      },
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    examples: [
      {
        description: 'Conditional Statements',
        code: `if x == 1:
    print("a")
elif x == 2:
    print("b")
else:
    print("c")`,
      },
      {
        description: 'Ternary Operator',
        code: `x = "a" if n > 1 else "b"`,
      },
      {
        description: 'Boolean Operators',
        code: `x and y  # Both should be true
x or y   # At least one true
not x    # Inverses a boolean`,
      },
      {
        description: 'Comparison Operators',
        code: `== # Equal
!= # Not equal`,
      },
      {
        description: 'Chaining Comparison Operators',
        code: `if 18 <= age < 65:
    # Code here executes if age is between 18 and 64`,
      },
      {
        description: 'Loops',
        code: `# For loop
for n in range(1, 10):
    # Iterates from 1 to 9

# While loop
while n > 10:
    # Executes while n > 10`,
      },
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    examples: [
      {
        description: 'Defining Functions',
        code: `def increment(number, by=1):
    return number + by`,
      },
      {
        description: 'Keyword Arguments',
        code: `increment(2, by=1)`,
      },
      {
        description: 'Variable Number of Arguments',
        code: `def multiply(*numbers):
    for number in numbers:
        print(number)

multiply(1, 2, 3, 4)`,
      },
      {
        description: 'Variable Number of Keyword Arguments',
        code: `def save_user(**user):
    # user is a dictionary

save_user(id=1, name="Mosh")`,
      },
    ],
  },
  {
    id: 'lists',
    title: 'Lists',
    examples: [
      {
        description: 'Creating Lists',
        code: `letters = ["a", "b", "c"]
matrix = [[0, 1], [1, 2]]
zeros = [0] * 5
combined = zeros + letters
numbers = list(range(20))`,
      },
      {
        description: 'Accessing Items',
        code: `letters = ["a", "b", "c", "d"]
letters[0]    # "a"
letters[-1]   # "d"`,
      },
      {
        description: 'Slicing Lists',
        code: `letters[0:3]    # ["a", "b", "c"]
letters[:3]     # ["a", "b", "c"]
letters[0:]     # ["a", "b", "c", "d"]
letters[:]      # ["a", "b", "c", "d"]
letters[::2]    # ["a", "c"]
letters[::-1]   # ["d", "c", "b", "a"]`,
      },
      {
        description: 'Adding Items',
        code: `letters.append("e")    # Add to end
letters.insert(0, "-") # Insert at index`,
      },
      {
        description: 'Removing Items',
        code: `letters.pop()      # Remove last item
letters.pop(0)      # Remove at index
letters.remove("b") # Remove by value
del letters[0:3]    # Remove a slice
letters.clear()     # Remove all items`,
      },
      {
        description: 'Finding Items',
        code: `if "f" in letters:
    letters.index("f")  # Find index of value
    letters.count("a")  # Count occurrences of value`,
      },
      {
        description: 'Sorting Lists',
        code: `letters.sort()
letters.sort(reverse=True)`,
      },
      {
        description: 'Custom Sorting',
        code: `items = [
    ("Product1", 10),
    ("Product2", 9),
    ("Product3", 12)
]

# Using a named function
def sort_item(item):
    return item[1]

items.sort(key=sort_item)

# General lambda syntax
items.sort(key=lambda parameters: expression)

# Using a lambda function (more concise)
items.sort(key=lambda item: item[1])

print(items)  # [("Product2", 9), ("Product1", 10), ("Product3", 12)]`,
      },
      {
        description: 'Lambda Functions',
        code: `# Lambda syntax: lambda parameters: expression

# Using map with lambda to extract prices
items = [
    ("Product1", 10),
    ("Product2", 9),
    ("Product3", 12)
]
prices = list(map(lambda item: item[1], items))
print(prices)  # [10, 9, 12]

# Using filter with lambda to filter items
x = list(filter(lambda item: item[1] >= 10, items))
print(x)  # [("Product1", 10), ("Product3", 12)]`,
      },
      {
        description: 'Unpacking Lists',
        code: `first, second, *other = letters`,
      },
      {
        description: 'Looping Over Lists',
        code: `for letter in letters:
    # Process each letter

for index, letter in enumerate(letters):
    # Process both index and letter`,
      },
      {
        description: 'Zip Function',
        code: `list1 = [1, 2, 3]
list2 = [10, 20, 30]
combined = list(zip(list1, list2))
# [(1, 10), (2, 20), (3, 30)]

# Zip with a string
result = list(zip("abc", list1, list2))
# [('a', 1, 10), ('b', 2, 20), ('c', 3, 30)]`,
      },
      {
        description: 'Unpacking Operator',
        code: `list1 = [1, 2, 3]
list2 = [10, 20, 30]
combined = [*list1, "a", *list2]`,
      },
    ],
  },
  {
    id: 'tuples-sets-dictionaries',
    title: 'Tuples, Sets, and Dictionaries',
    examples: [
      {
        description: 'Tuples (immutable sequences)',
        code: `point = 1, 2, 3
point = (1, 2, 3)
point = (1,)  # Single-item tuple
point = ()    # Empty tuple
point[0:2]    # Slice a tuple
x, y, z = point  # Unpack a tuple`,
      },
      {
        description: 'Swapping Variables',
        code: `x = 10
y = 11
x, y = y, x  # Swap values`,
      },
      {
        description: 'Arrays (for large sequences of numbers)',
        code: `from array import array
numbers = array("i", [1, 2, 3])`,
      },
      {
        description: 'Sets (unordered collections with no duplicates)',
        code: `first = {1, 2, 3, 4}
second = {1, 5}

first | second  # Union: {1, 2, 3, 4, 5}
first & second  # Intersection: {1}
first - second  # Difference: {2, 3, 4}
first ^ second  # Symmetric Difference: {2, 3, 4, 5}`,
      },
      {
        description: 'Dictionaries (key-value pairs)',
        code: `point = {"x": 1, "y": 2}
point = dict(x=1, y=2)
point["z"] = 3          # Add key-value pair

if "a" in point:        # Check if key exists
    # Do something

point.get("a", 0)       # Get with default
del point["x"]          # Delete a key-value pair

for key, value in point.items():
    # Process keys and values`,
      },
      {
        description: 'Stack (LIFO - Last In, First Out)',
        code: `# Creating a stack
browsing_session = []

# Pushing an item
browsing_session.append(1)
browsing_session.append(2)
browsing_session.append(3)
print(browsing_session)  # [1, 2, 3]

# Popping (removing and returning the last item)
last = browsing_session.pop()
print(last)              # 3
print(browsing_session)  # [1, 2]

# Peek (get the top item without removing)
print("redirect", browsing_session[-1])  # "redirect" 2

# Check if stack is empty
if not browsing_session:
    print("disable")`,
      },
      {
        description: 'Queue (FIFO - First In, First Out)',
        code: `from collections import deque

# Creating a queue
# Unlike a regular list, deque provides O(1) time complexity
# for append and pop operations from both ends
# With a regular list, popping from the beginning (list.pop(0))
# requires shifting all remaining elements left, making it O(n)

queue = deque([])

# Adding items to the queue
queue.append(1)
queue.append(2)
queue.append(3)

# Removing the first item (FIFO)
queue.popleft()  # Removes and returns 1

print(queue)  # deque([2, 3])

# Check if queue is empty
if not queue:
    print("empty")`,
      },
    ],
  },
  {
    id: 'comprehensions',
    title: 'Comprehensions',
    examples: [
      {
        description: 'List Comprehensions',
        code: `# General syntax: [expression for item in items]

# Basic list comprehension
values = [x * 2 for x in range(5)]

# With condition (filtering)
values = [x * 2 for x in range(5) if x % 2 == 0]

# Example with real data
items = [
    ("Product1", 10),
    ("Product2", 9),
    ("Product3", 12)
]

# Extracting values - equivalent approaches:
# Using map with lambda
prices = list(map(lambda item: item[1], items))
# Using list comprehension
prices = [item[1] for item in items]

# Filtering values - equivalent approaches:
# Using filter with lambda
filtered = list(filter(lambda item: item[1] >= 10, items))
# Using list comprehension
filtered = [item for item in items if item[1] >= 10]`,
      },
      {
        description: 'Set Comprehensions',
        code: `values = {x * 2 for x in range(5)}`,
      },
      {
        description: 'Dictionary Comprehensions',
        code: `values = {x: x * 2 for x in range(5)}`,
      },
      {
        description: 'Generator Expressions (memory efficient)',
        code: `values = (x for x in range(500000))`,
      },
    ],
  },
  {
    id: 'exceptions',
    title: 'Exceptions',
    examples: [
      {
        description: 'Handling Exceptions',
        code: `try:
    # Code that might raise exception
except (ValueError, ZeroDivisionError):
    # Handle specific exceptions
else:
    # Executed if no exceptions raised
finally:
    # Cleanup code`,
      },
      {
        description: 'Raising Exceptions',
        code: `if x < 1:
    raise ValueError("...")`,
      },
      {
        description: 'The with Statement (context management)',
        code: `with open("file.txt") as file:
    # File is automatically closed after this block`,
      },
    ],
  },
  {
    id: 'classes',
    title: 'Classes',
    examples: [
      {
        description: 'Creating Classes',
        code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def draw(self):
        # Method implementation`,
      },
      {
        description: 'Instance vs Class Attributes',
        code: `class Point:
    default_color = "red"  # Class attribute

    def __init__(self, x, y):
        self.x = x  # Instance attribute`,
      },
      {
        description: 'Instance vs Class Methods',
        code: `class Point:
    def draw(self):  # Instance method
        # Uses self

    @classmethod
    def zero(cls):   # Class method
        return cls(0, 0)`,
      },
      {
        description: 'Magic Methods',
        code: `__str__()  # String representation
__eq__()   # Equality comparison
__cmp__()  # Comparison`,
      },
      {
        description: 'Private Members',
        code: `class Point:
    def __init__(self, x):
        self.__x = x  # Private attribute`,
      },
      {
        description: 'Properties',
        code: `class Point:
    def __init__(self, x):
        self.__x = x

    @property
    def x(self):
        return self.__x

    @x.setter
    def x(self, value):
        self.__x = value`,
      },
      {
        description: 'Inheritance',
        code: `class FileStream(Stream):
    def open(self):
        super().open()  # Call parent method`,
      },
      {
        description: 'Multiple Inheritance',
        code: `class FlyingFish(Flyer, Swimmer):
    # Inherits from multiple classes`,
      },
      {
        description: 'Abstract Base Classes',
        code: `from abc import ABC, abstractmethod

class Stream(ABC):
    @abstractmethod
    def read(self):
        pass`,
      },
      {
        description: 'Named Tuples',
        code: `from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
point = Point(x=1, y=2)`,
      },
    ],
  },
];
