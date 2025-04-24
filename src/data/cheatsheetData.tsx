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

save_user(id=1, name="John")`,
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
        code: `# Similar to spread operator in JavaScript

# Unpacking iterables into lists
values = list(range(5))          # [0, 1, 2, 3, 4]
values = [*range(5), *"Hello"]   # [0, 1, 2, 3, 4, 'H', 'e', 'l', 'l', 'o']

# Combining lists
first = [1, 2]
second = [3]
values = [*first, "a", *second, *"Hello"]
print(values)  # [1, 2, 'a', 3, 'H', 'e', 'l', 'l', 'o']

# Unpacking dictionaries (use ** for dictionaries)
first = {"x": 1}
second = {"x": 10, "y": 2}
combined = {**first, **second, "z": 1}
print(combined)  # {'x': 10, 'y': 2, 'z': 1} (note: second dict's values override first's)`,
      },
    ],
  },
  {
    id: 'tuples',
    title: 'Tuples',
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
x, y = y, x  # Swap values (creates a tuple and unpacks it)
# Under the hood: a tuple (y, x) is created and then unpacked`,
      },
    ],
  },
  {
    id: 'arrays',
    title: 'Arrays',
    examples: [
      {
        description: 'Arrays (for large sequences of numbers)',
        code: `from array import array
numbers = array("i", [1, 2, 3])

# Arrays use less memory and are faster for large lists
# Unlike lists, objects in arrays are typed ('i' = integers)
# Only use if you have performance problems with regular lists
# For ~90% of cases, regular lists are sufficient
# Don't optimize prematurely - don't solve a problem that doesn't exist`,
      },
    ],
  },
  {
    id: 'sets',
    title: 'Sets',
    examples: [
      {
        description: 'Sets (unordered collections with no duplicates)',
        code: `# Creating sets
numbers = [1, 1, 2, 3, 4]  # List with duplicates
first = set(numbers)       # Convert list to set (removes duplicates): {1, 2, 3, 4}
second = {1, 5}            # Direct set creation with curly braces

# Set operations
first | second  # Union: {1, 2, 3, 4, 5}
first & second  # Intersection: {1}
first - second  # Difference: {2, 3, 4}
first ^ second  # Symmetric Difference: {2, 3, 4, 5}`,
      },
    ],
  },
  {
    id: 'dictionaries',
    title: 'Dictionaries',
    examples: [
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
    ],
  },
  {
    id: 'data-structures',
    title: 'Data Structures',
    examples: [
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
        code: `# Traditional way:
values = {}
for x in range(5):
    values[x] = x * 2

# Dictionary comprehension (more concise):
values = {x: x * 2 for x in range(5)}
print(values)  # {0: 0, 1: 2, 2: 4, 3: 6, 4: 8}`,
      },
      {
        description: 'Generator Expressions (memory efficient)',
        code: `# Use generator expressions when:
# - Working with large datasets (to avoid loading everything into memory)
# - You only need to iterate through the values once
# - Processing data in a pipeline or stream

# Regular list (stores all values in memory)
values_list = [x for x in range(500000)]  # Creates full list in memory

# Generator expression (produces values on-demand)
values_gen = (x for x in range(500000))   # Creates generator object

# Generators calculate values one at a time, only when needed
# This makes them more memory-efficient for large datasets
# Each value is "forgotten" after use

# Example: finding the sum
sum(x for x in range(1000000))  # Efficient - never stores all values

# Real-world examples:
# 1. Processing large files
with open("large_log_file.txt") as file:
    lines = (line for line in file if "ERROR" in line)
    for line in lines:
        process_error(line)  # Process one line at a time

# 2. Data transformations
def get_users_data():
    users = get_users_from_database()  # Could be millions
    user_info = ((user.id, user.name) for user in users)
    return user_info  # Returns generator, not full list

# 3. Web scraping/API processing
page_urls = (f"https://api.example.com/data?page={i}" for i in range(1, 1000))
for url in page_urls:
    fetch_and_process(url)  # Process one page at a time`,
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
        description: 'Class & Object Concepts',
        code: `# Class: blueprint for creating new objects
# Object: instance of a class

# Every object in Python is created using a class
class_type = type(1)  # class 'int'
class_type = type(True)  # class 'bool'
class_type = type([1, 2])  # class 'list'`,
      },
      {
        description: 'Creating Classes',
        code: `# Pascal naming convention for classes (first letter of each word capitalized)
class Point:
    # All methods in classes should have 'self' as first parameter
    def draw(self):
        print("draw")

# Creating an instance
point = Point()
point.draw()  # Calling the method

# Checking object type
isinstance(point, Point)  # True`,
      },
      {
        description: 'Constructors',
        code: `class Point:
    def __init__(self, x, y):  # Constructor
        self.x = x  # Creating instance attributes
        self.y = y

    def draw(self):
        print(f"Point ({self.x}, {self.y})")

# Creating an instance with initial values
point = Point(10, 20)
point.draw()  # Output: Point (10, 20)`,
      },
      {
        description: 'Instance vs Class Attributes',
        code: `class Point:
    default_color = "red"  # Class attribute (shared by all instances)

    def __init__(self, x, y):
        self.x = x  # Instance attributes (unique to each instance)
        self.y = y

# Accessing class attribute through the class
print(Point.default_color)  # Output: red

# Accessing class attribute through an instance
point = Point(1, 2)
print(point.default_color)  # Output: red

# Modifying class attribute affects all instances
Point.default_color = "blue"
print(point.default_color)  # Output: blue`,
      },
      {
        description: 'Instance vs Class Methods',
        code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def draw(self):  # Instance method
        print(f"Point ({self.x}, {self.y})")

    @classmethod
    def zero(cls):  # Class method
        return cls(0, 0)  # Returns a new Point at origin

# Using the class method to create a point at origin
origin = Point.zero()
origin.draw()  # Output: Point (0, 0)`,
      },
      {
        description: 'Magic Methods',
        code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):  # Called when converting object to string
        return f"({self.x}, {self.y})"

    def __eq__(self, other):  # Called when using == operator
        return self.x == other.x and self.y == other.y

    def __gt__(self, other):  # Called when using > operator
        return self.x > other.x and self.y > other.y

    def __add__(self, other):  # Called when using + operator
        return Point(self.x + other.x, self.y + other.y)

p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = Point(3, 4)

print(p1)  # Output: (1, 2)
print(p1 == p2)  # Output: True
print(p3 > p1)  # Output: True
combined = p1 + p2  # Creates a new Point(2, 4)`,
      },
      {
        description: 'Making Custom Containers',
        code: `class TagCloud:
    def __init__(self):
        self.__tags = {}  # Private dictionary (using double underscore)

    def add(self, tag):
        self.__tags[tag.lower()] = self.__tags.get(tag.lower(), 0) + 1

    def __getitem__(self, tag):  # Called when using [] syntax for access
        return self.__tags.get(tag.lower(), 0)

    def __setitem__(self, tag, count):  # Called when using [] syntax for assignment
        self.__tags[tag.lower()] = count

    def __len__(self):  # Called when using len() function
        return len(self.__tags)

    def __iter__(self):  # Called when iterating over the object
        return iter(self.__tags)

# Usage
cloud = TagCloud()
cloud.add("Python")
cloud.add("python")
cloud.add("PYTHON")
print(cloud["PYTHON"])  # Output: 3
cloud["java"] = 10
print(len(cloud))  # Output: 2`,
      },
      {
        description: 'Private Members',
        code: `class Point:
    def __init__(self, x):
        self.__x = x  # Private attribute (name mangling)

    def get_x(self):
        return self.__x

    def set_x(self, value):
        self.__x = value

point = Point(1)
# print(point.__x)  # This will raise an AttributeError
print(point.get_x())  # Access through method: 1

# Private attributes can still be accessed (not truly private)
print(point._Point__x)  # Direct access using name mangling: 1`,
      },
      {
        description: 'Properties',
        code: `class Point:
    def __init__(self, x):
        self.__x = x  # Private attribute

    @property  # Getter
    def x(self):
        return self.__x

    @x.setter  # Setter
    def x(self, value):
        if value < 0:
            raise ValueError("Value cannot be negative")
        self.__x = value

point = Point(1)
print(point.x)  # Access like an attribute, not a method
point.x = 10  # Uses the setter
# point.x = -1  # Raises ValueError`,
      },
      {
        description: 'Inheritance',
        code: `class Animal:
    def __init__(self):
        self.age = 1

    def eat(self):
        print("eat")

class Mammal(Animal):  # Inherits from Animal
    def walk(self):
        print("walk")

class Bird(Animal):  # Inherits from Animal
    def fly(self):
        print("fly")

m = Mammal()
m.eat()  # Inherited method
m.walk()  # Method defined in Mammal
print(m.age)  # Inherited attribute: 1

# Checking inheritance
isinstance(m, Mammal)  # True
isinstance(m, Animal)  # True
isinstance(m, object)  # True - all classes inherit from object

# Checking subclass relationship
issubclass(Mammal, Animal)  # True
issubclass(Mammal, object)  # True`,
      },
      {
        description: 'Method Overriding',
        code: `class Animal:
    def __init__(self):
        self.age = 1

    def eat(self):
        print("Animal eat")

class Mammal(Animal):
    def __init__(self):
        super().__init__()  # Call parent constructor
        self.weight = 2

    def eat(self):
        super().eat()  # Call parent method
        print("Mammal eat")

m = Mammal()
m.eat()
# Output:
# Animal eat
# Mammal eat

print(m.age)     # 1 (from Animal)
print(m.weight)  # 2 (from Mammal)`,
      },
      {
        description: 'Multiple Inheritance',
        code: `class Flyer:
    def fly(self):
        print("fly")

class Swimmer:
    def swim(self):
        print("swim")

class FlyingFish(Flyer, Swimmer):  # Inherits from multiple classes
    pass

f = FlyingFish()
f.fly()   # Method from Flyer
f.swim()  # Method from Swimmer

# Be careful with multiple inheritance when classes have methods with the same name
# Python will use the method from the first class listed in the inheritance`,
      },
      {
        description: 'Abstract Base Classes',
        code: `from abc import ABC, abstractmethod

class Stream(ABC):  # Abstract base class
    @abstractmethod
    def read(self):  # Abstract method must be implemented by subclasses
        pass

    @abstractmethod
    def write(self):
        pass

class FileStream(Stream):
    def read(self):
        print("Reading from a file")

    def write(self):
        print("Writing to a file")

# stream = Stream()  # This would raise TypeError - can't instantiate abstract class
fs = FileStream()  # This works because all abstract methods are implemented`,
      },
      {
        description: 'Duck Typing',
        code: `# Python uses duck typing: "If it walks like a duck and quacks like a duck, it is a duck"
# Objects don't need to inherit from a common base class to be used polymorphically

class TextBox:
    def draw(self):
        print("TextBox")

class DropDownList:
    def draw(self):
        print("DropDownList")

def draw(controls):
    for control in controls:
        control.draw()

# These don't inherit from a common base class, but both have draw() method
draw([TextBox(), DropDownList()])`,
      },
      {
        description: 'Extending Built-in Types',
        code: `class Text(str):  # Inherit from built-in string type
    def duplicate(self):
        return self + self

class TrackableList(list):  # Inherit from built-in list type
    def append(self, object):
        print("Append called")
        super().append(object)  # Call the parent's append method

text = Text("Python")
print(text.lower())    # Built-in method: python
print(text.duplicate())  # Custom method: PythonPython

tracked = TrackableList()
tracked.append(1)  # Output: Append called`,
      },
      {
        description: 'Data Classes (Python 3.7+)',
        code: `from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int
    z: int = 0  # Default value

    def calculate_distance(self):
        return (self.x ** 2 + self.y ** 2 + self.z ** 2) ** 0.5

# Automatically implements __init__, __repr__, __eq__, etc.
p = Point(1, 2)
print(p)  # Output: Point(x=1, y=2, z=0)

# Equality comparison works without custom __eq__
print(Point(1, 2) == Point(1, 2))  # Output: True`,
      },
      {
        description: 'Named Tuples',
        code: `from collections import namedtuple

# Lightweight, immutable class alternative
Point = namedtuple("Point", ["x", "y"])
# or Point = namedtuple("Point", "x y")

p1 = Point(1, 2)
p2 = Point(x=1, y=2)  # Can use keyword arguments
print(p1.x, p1.y)  # Access by name: 1 2
print(p1[0], p1[1])  # Access by index: 1 2

# Unpacking works too
x, y = p1`,
      },
    ],
  },
  {
    id: 'modules',
    title: 'Modules',
    examples: [
      {
        description: 'Creating Modules',
        code: `# A module is a file containing Python code
# Used to organize code into manageable parts

# sales.py (a module file)
def calculate_tax():
    pass

def calculate_shipping():
    pass

# In app.py (importing the module)
from sales import calculate_tax, calculate_shipping

# Alternative import style
import sales
sales.calculate_tax()

# Don't use: from sales import *  # Bad practice`,
      },
      {
        description: 'Compiled Python Files',
        code: `# Python compiles imported modules to .pyc files
# These are stored in the __pycache__ folder
# Purpose: Speed up module loading, not execution speed
# Python automatically checks file timestamps to determine
# when to recompile modules

# Example of compiled filename:
# __pycache__/sales.cpython-37.pyc`,
      },
      {
        description: 'Module Search Path',
        code: `import sys

# Python searches for modules in these locations in order:
print(sys.path)  # List of directories Python searches

# 1. Current directory first
# 2. PYTHONPATH environment variable directories
# 3. Standard library directories
# 4. Site-packages directories (third-party modules)

# This is why proper organization with packages is important`,
      },
      {
        description: 'Packages',
        code: `# A package is a container for multiple modules
# In file system terms: a package is a directory with an __init__.py file

# Directory structure:
# ecommerce/
#   __init__.py  # Makes the directory a package
#   sales.py

# Importing from packages
from ecommerce.sales import calculate_tax
import ecommerce.sales

# The __init__.py file can be empty or contain initialization code
# that runs when the package is imported`,
      },
      {
        description: 'Sub-packages',
        code: `# Packages can contain sub-packages to create deeper organization

# Directory structure:
# ecommerce/
#   __init__.py
#   shopping/
#     __init__.py
#     sales.py

# Importing from sub-packages
from ecommerce.shopping.sales import calculate_tax

# Each directory needs an __init__.py file to be considered a package`,
      },
      {
        description: 'Intra-package References',
        code: `# Sometimes you need to import modules from sibling packages
# There are two approaches: absolute and relative imports

# Absolute imports (preferred)
from ecommerce.customer import contact

# Relative imports
from ..customer import contact  # Two dots = up one level
from . import sales  # Same package (current directory)

# PEP 8 recommends absolute imports as they're more readable
# Use relative imports only if the absolute paths get too verbose`,
      },
      {
        description: 'The dir Function',
        code: `# The dir() function returns a list of attributes and methods of an object
# Useful for exploring and debugging modules

import sales
print(dir(sales))  # Shows all attributes/methods in sales module

# Every module has automatically created attributes
print(sales.__name__)     # Full module name (e.g., 'ecommerce.shopping.sales')
print(sales.__package__)  # Package name (e.g., 'ecommerce.shopping')
print(sales.__file__)     # File path on disk`,
      },
      {
        description: 'Executing Modules as Scripts',
        code: `# Modules can be both imported and run directly as scripts
# The __name__ variable helps distinguish between the two cases

# sales.py
def calculate_tax():
    pass

def calculate_shipping():
    pass

# This code runs only when the module is executed directly
# It doesn't run when the module is imported elsewhere
if __name__ == "__main__":
    print("Sales module started")
    calculate_tax()

# When run directly: __name__ equals "__main__"
# When imported: __name__ equals the module's name`,
      },
    ],
  },
  {
    id: 'standard-library',
    title: 'Python Standard Library',
    examples: [
      {
        description: 'Working with Paths',
        code: `# Python's pathlib module provides an object-oriented interface to file paths
from pathlib import Path

# Creating path objects
path = Path("ecommerce/__init__.py")  # Relative path
path = Path("/usr/local/bin")         # Absolute path (Unix/Mac)
path = Path(r"C:\\Program Files\\")   # Absolute path (Windows)
path = Path.home()                    # Home directory

# Path operations and properties
path.exists()                # Check if path exists
path.is_file()               # Check if path is a file
path.is_dir()                # Check if path is a directory
print(path.name)             # File name with extension
print(path.stem)             # File name without extension
print(path.suffix)           # File extension
print(path.parent)           # Parent directory

# Creating new paths based on existing paths
path = path.with_name("file.txt")    # Replace name and extension
path = path.with_suffix(".txt")      # Replace extension only
print(path.absolute())               # Get absolute path`,
      },
      {
        description: 'Working with Directories',
        code: `from pathlib import Path

path = Path("ecommerce")

# Directory operations
path.exists()               # Check if directory exists
path.mkdir()                # Create directory
path.rmdir()                # Remove directory
path.rename("ecommerce2")   # Rename directory

# Listing directory contents
for p in path.iterdir():    # List files and directories
    print(p)

# List comprehension with filtering
dirs = [p for p in path.iterdir() if p.is_dir()]
py_files = [p for p in path.glob("*.py")]         # Non-recursive search
all_py_files = [p for p in path.rglob("*.py")]    # Recursive search`,
      },
      {
        description: 'Working with Files',
        code: `from pathlib import Path
import shutil
import time

path = Path("file.txt")

# File operations
path.exists()               # Check if file exists
path.rename("new_name.txt") # Rename file
path.unlink()               # Delete file

# File information
stats = path.stat()         # Get file stats
print(stats.st_size)        # File size in bytes
print(stats.st_ctime)       # Creation time (timestamp)

# Convert timestamp to human-readable format
from time import ctime
print(ctime(stats.st_ctime))

# Reading and writing files
content = path.read_text()             # Read text file
path.write_text("Hello, World!")       # Write to text file
binary_data = path.read_bytes()        # Read binary file
path.write_bytes(b"Binary content")    # Write binary file

# Copying files (use shutil module)
source = Path("file.txt")
target = Path("file_copy.txt")
shutil.copy(source, target)            # Copy file`,
      },
      {
        description: 'Working with Zip Files',
        code: `from pathlib import Path
from zipfile import ZipFile

# Creating zip files
with ZipFile("files.zip", "w") as zip:
    # Get all files in the ecommerce directory recursively
    for path in Path("ecommerce").rglob("*.*"):
        zip.write(path)

# Reading zip files
with ZipFile("files.zip") as zip:
    # List zip contents
    print(zip.namelist())

    # Get info about a specific file
    info = zip.getinfo("ecommerce/__init__.py")
    print(info.file_size)
    print(info.compress_size)

    # Extract files
    zip.extractall("extract_dir")`,
      },
      {
        description: 'Working with CSV Files',
        code: `import csv
from pathlib import Path

# Writing CSV files
with open("data.csv", "w") as file:
    writer = csv.writer(file)
    writer.writerow(["transaction_id", "product_id", "price"])
    writer.writerow([1000, 1, 5])
    writer.writerow([1001, 2, 15])

# Reading CSV files
with open("data.csv") as file:
    reader = csv.reader(file)
    # Convert to list (consumes the iterator)
    data = list(reader)
    print(data)

    # OR iterate through the rows
    # for row in reader:
    #     print(row)

# Note: CSV module requires file objects, not Path objects
# All values are read as strings and need manual conversion`,
      },
      {
        description: 'Working with JSON Files',
        code: `import json
from pathlib import Path

# Creating JSON data
movies = [
    {"id": 1, "title": "Terminator", "year": 1989},
    {"id": 2, "title": "Kindergarten Cop", "year": 1993}
]

# Converting Python objects to JSON string
data = json.dumps(movies)

# Writing JSON to a file
Path("movies.json").write_text(data)

# Reading JSON from a file
data = Path("movies.json").read_text()
movies = json.loads(data)

# Accessing JSON data
print(movies[0]["title"])  # Terminator`,
      },
      {
        description: 'Working with Timestamps',
        code: `import time

# Get current timestamp (seconds since Unix epoch)
timestamp = time.time()
print(timestamp)  # e.g., 1621532240.3567

# Convert timestamp to human-readable time
time_string = time.ctime(timestamp)
print(time_string)  # e.g., Thu May 20 12:30:40 2021

# Measuring execution time
start = time.time()

# Code to measure
for i in range(1000000):
    pass

end = time.time()
duration = end - start
print(f"Execution time: {duration} seconds")`,
      },
      {
        description: 'Working with DateTimes',
        code: `from datetime import datetime, timedelta

# Current date and time
now = datetime.now()
print(now)  # e.g., 2021-05-20 12:34:56.789012

# Creating specific datetime objects
dt1 = datetime(2020, 1, 1)
dt2 = datetime(2020, 1, 1, 14, 30)  # Year, month, day, hour, minute

# Formatting datetime to string
print(dt1.strftime("%Y-%m-%d %H:%M:%S"))  # 2020-01-01 00:00:00
print(dt1.strftime("%Y/%m/%d"))           # 2020/01/01
print(dt1.strftime("%B %d, %Y"))          # January 01, 2020

# Parsing string to datetime
date_str = "2020-01-01"
date_obj = datetime.strptime(date_str, "%Y-%m-%d")

# Date arithmetic with timedelta
tomorrow = now + timedelta(days=1)
next_hour = now + timedelta(hours=1)
yesterday = now - timedelta(days=1)`,
      },
      {
        description: 'Working with Time Deltas',
        code: `from datetime import datetime, timedelta

# Creating time deltas
delta1 = timedelta(days=1)
delta2 = timedelta(days=1, seconds=1000, microseconds=1000)

# Date arithmetic
dt1 = datetime(2020, 1, 1)
dt2 = dt1 + delta1
print(dt2)  # 2020-01-02 00:00:00

# Calculating time differences
dt1 = datetime(2020, 1, 1)
dt2 = datetime(2020, 12, 31)
delta = dt2 - dt1

print(delta.days)           # 365
print(delta.seconds)        # 0
print(delta.total_seconds())  # 31536000.0`,
      },
      {
        description: 'Generating Random Values',
        code: `import random
import string

# Random float between 0 and 1
print(random.random())

# Random integer between a and b (inclusive)
print(random.randint(1, 10))

# Random element from a sequence
print(random.choice([1, 2, 3, 4, 5]))

# Random multiple elements (with replacement)
print(random.choices([1, 2, 3, 4, 5], k=3))

# Shuffle a list in-place
numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)
print(numbers)

# Generate a random password
letters = string.ascii_letters + string.digits
password = ''.join(random.choices(letters, k=8))
print(password)`,
      },
      {
        description: 'Opening Web Browsers',
        code: `import webbrowser

# Open a URL in the default browser
webbrowser.open("https://google.com")

# Open a URL in a new window
webbrowser.open_new("https://python.org")

# Open a URL in a new tab
webbrowser.open_new_tab("https://docs.python.org")

# Useful for automation scripts, e.g., after deployment:
print("Deployment completed")
webbrowser.open("https://myapp.com")  # Open the deployed site`,
      },
      {
        description: 'Command-Line Arguments',
        code: `import sys

# sys.argv is a list containing command-line arguments
# sys.argv[0] is the script name itself
# Example: python app.py arg1 arg2 arg3

# Print all arguments
print(sys.argv)

# Check if arguments were provided
if len(sys.argv) == 1:
    print("Usage: python app.py <password>")
else:
    password = sys.argv[1]
    print(f"Password: {password}")

# More sophisticated argument parsing
import argparse

parser = argparse.ArgumentParser(description="Description of your program")
parser.add_argument("-f", "--file", help="Input file name", required=True)
parser.add_argument("-o", "--output", help="Output file name")
parser.add_argument("-v", "--verbose", action="store_true", help="Increase verbosity")

args = parser.parse_args()

if args.verbose:
    print(f"Processing {args.file}...")
# Use as: python app.py -f input.txt -o output.txt -v`,
      },
    ],
  },
  {
    id: 'package-index',
    title: 'Python Package Index',
    examples: [
      {
        description: 'PyPI (Python Package Index)',
        code: `# PyPI is a repository of Python packages built by the community
# Located at https://pypi.org
# Similar to npm for JavaScript or Maven for Java
# Contains over 350,000 projects/packages

# Popular packages for common tasks:
# - requests: HTTP client
# - Django/Flask: Web frameworks
# - NumPy/Pandas: Data analysis
# - Matplotlib/Seaborn: Data visualization
# - TensorFlow/PyTorch: Machine learning`,
      },
      {
        description: 'pip (Package Installer for Python)',
        code: `# Installing packages
pip install requests                 # Install latest version
pip install requests==2.28.1         # Install specific version
pip install requests>=2.28.1         # Install minimum version
pip install requests~=2.28.1         # Install compatible version (2.28.x)

# Managing packages
pip uninstall requests               # Uninstall a package
pip list                             # List installed packages
pip show requests                    # Show package details
pip freeze > requirements.txt        # Export dependencies list
pip install -r requirements.txt      # Install from requirements file
pip install --upgrade requests       # Upgrade a package
pip install --upgrade pip            # Upgrade pip itself`,
      },
      {
        description: 'Virtual Environments',
        code: `# Virtual environments isolate project dependencies
# Allow different projects to use different versions of packages
# Prevent conflicts between package versions

# Creating virtual environments
# Python 3.3+ has built-in venv module
python -m venv env                   # Create virtual environment named "env"

# Activating the environment
# On Windows:
env\\Scripts\\activate

# On macOS/Linux:
source env/bin/activate              # Terminal shows (env) when active

# Deactivating the environment
deactivate

# The virtual env has its own pip and Python interpreter
# Packages installed while activated are isolated to this environment`,
      },
      {
        description: 'pipenv (Modern Python Workflow)',
        code: `# pipenv combines pip and virtual environments into one tool
# Install it with: pip install pipenv

# Basic usage
pipenv install requests              # Create venv and install package
pipenv install pytest --dev          # Install development dependency
pipenv uninstall requests            # Uninstall package
pipenv shell                         # Activate virtual environment
exit                                 # Exit the virtual environment

# Project management
pipenv --venv                        # Show virtual env location
pipenv graph                         # Show dependency graph
pipenv lock                          # Generate Pipfile.lock
pipenv install --ignore-pipfile      # Install from Pipfile.lock
pipenv update --outdated             # Show outdated dependencies
pipenv update                        # Update all packages
pipenv update requests               # Update specific package`,
      },
      {
        description: 'Pipfile and Pipfile.lock',
        code: `# Pipfile - Human-readable dependency definitions
# Example Pipfile:
[packages]
requests = ">=2.20.0"
numpy = "*"              # Latest version

[dev-packages]
pytest = "*"
black = "*"

[requires]
python_version = "3.9"   # Python version requirement

# Pipfile.lock - Generated file with exact versions
# Used to recreate identical environments
# Contains hashes to verify package integrity
# Should be committed to version control
# Never edit manually!`,
      },
      {
        description: 'Publishing Packages to PyPI',
        code: `# File structure for a simple package
my_package/
  ├── setup.py                # Package metadata
  ├── README.md               # Package documentation
  ├── LICENSE                 # License information
  └── my_package/             # Actual module code
      ├── __init__.py         # Makes directory a package
      └── module.py           # Code implementation

# Example setup.py file
from setuptools import setup, find_packages

setup(
    name="my_package",
    version="0.1.0",
    author="Your Name",
    author_email="your.email@example.com",
    description="A brief description of the package",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/yourusername/my_package",
    packages=find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
    install_requires=["requests", "numpy"],
)

# Building and publishing
pip install build twine               # Install build tools
python -m build                       # Build package (creates dist/)
twine check dist/*                    # Check package validity
twine upload --repository-url https://test.pypi.org/legacy/ dist/*  # Upload to TestPyPI
twine upload dist/*                   # Upload to PyPI (needs account)`,
      },
      {
        description: 'Docstrings',
        code: `# Docstrings are used to document Python modules, classes, and functions
# They appear as the first statement in a module, class, or function
# Used by help(), pydoc, and IDE autocompletion

# Module level docstring
"""
This module provides utilities for working with dates.

It contains functions for parsing, formatting, and manipulating dates
in various formats.
"""

# Function docstring
def parse_date(date_string, format="%Y-%m-%d"):
    """
    Parse a string into a datetime object.

    Parameters:
        date_string (str): The date string to parse
        format (str): The format string (default: ISO format)

    Returns:
        datetime: A datetime object representing the date

    Raises:
        ValueError: If the date_string cannot be parsed with the given format
    """
    # Function implementation here

# Class docstring
class DateConverter:
    """
    A utility class for converting between date formats.

    This class provides methods to convert dates between different
    string representations and datetime objects.

    Attributes:
        default_format (str): The default date format to use
    """

    def __init__(self, default_format="%Y-%m-%d"):
        """
        Initialize the DateConverter with a default format.

        Parameters:
            default_format (str): The default format string to use
        """
        self.default_format = default_format`,
      },
      {
        description: 'pydoc (Python Documentation Generator)',
        code: `# pydoc is a built-in tool to access Python documentation

# Viewing documentation in terminal
pydoc math                      # Documentation for a module
pydoc math.sin                  # Documentation for a function
pydoc -k keyword                # Search for keyword in all modules

# Generating HTML documentation
pydoc -w math                   # Generates math.html
pydoc -w .                      # Document current directory

# Starting a documentation server
pydoc -p 8080                   # Start web server on port 8080
# Then access http://localhost:8080/

# From within Python code
help(math)                      # Show module documentation
help(math.sin)                  # Show function documentation

# Example of help() output:
# >>> help(math.sin)
# Help on built-in function sin in module math:
#
# sin(x, /)
#     Return the sine of x (measured in radians).`,
      },
      {
        description: 'uv (Modern Python Package Manager)',
        code: `# uv is a modern Python package manager and installer written in Rust
# Much faster than pip and pipenv for dependency resolution and installation
# Provides tools for managing Python versions, dependencies, and projects
# Install with: curl -LsSf https://astral.sh/uv/install.sh | sh

# Python version management
uv python install                    # Install latest Python version
uv python install 3.11               # Install specific Python version
uv python list                       # View available Python versions
uv python find                       # Find an installed Python version
uv python pin                        # Pin project to specific Python version
uv python uninstall 3.10             # Uninstall a Python version

# Package installation
uv pip install requests              # Install a package
uv pip install requests==2.28.1      # Install specific version
uv pip install -r requirements.txt   # Install from requirements file
uv pip install -e .                  # Install current directory in editable mode
uv pip uninstall requests            # Uninstall a package
uv pip freeze                        # List installed packages

# Virtual environments
uv venv                              # Create virtual environment in .venv
uv venv /path/to/venv                # Create at specific location
uv pip install --venv requests       # Install into a virtual environment

# Project management
uv init                              # Create a new Python project
uv add requests                      # Add dependency to project
uv add pytest --dev                  # Add development dependency
uv remove requests                   # Remove dependency from project
uv sync                              # Sync dependencies with environment
uv lock                              # Create lockfile for dependencies
uv tree                              # View dependency tree
uv build                             # Build project into distribution archives
uv publish                           # Publish project to package index

# Script management
uv run python script.py              # Run a script with project's Python
uv run pytest                        # Run pytest in project environment
uv add --script script.py requests   # Add dependency to a script
uv remove --script script.py requests # Remove dependency from script

# Enhanced workflow and performance:
# - Parallel operations (downloads and installations)
# - Fast dependency resolution algorithm
# - Seamless Python version management
# - Native binary wheels with no compilation needed
# - Reproducible environments with lockfiles`,
      },
    ],
  },
];
