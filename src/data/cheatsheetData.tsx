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
];
