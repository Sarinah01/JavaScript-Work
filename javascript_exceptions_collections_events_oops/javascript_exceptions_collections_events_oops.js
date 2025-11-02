// ==========================================================
// ⚡ JavaScript: Exception Handling + Collections + Events + OOP
// ==========================================================


// ==========================================================
// 🔹 1. JavaScript Exception Handling
// ==========================================================
//
// Exceptions = runtime errors that stop code execution.
// JavaScript provides try...catch...finally blocks to handle errors gracefully.

try {
  let num = 10;
  console.log(num / 0); // Infinity (no error)
  throw new Error("Custom Error Thrown!");
} catch (err) {
  console.log("Error Caught:", err.message);
} finally {
  console.log("Finally block always runs!");
}

// Output:
// Error Caught: Custom Error Thrown!
// Finally block always runs!


// ----- Example: Reference Error -----
try {
  console.log(undeclaredVar); // undeclared variable
} catch (err) {
  console.log("Error Type:", err.name); // ReferenceError
}


// ----- Custom Error Example -----
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero!");
  return a / b;
}
try {
  console.log(divide(5, 0));
} catch (e) {
  console.log(e.message);
}


// ==========================================================
// 🔹 2. JavaScript Collections (Map and Set)
// ==========================================================


// ----------------------
// 🔸 Map
// ----------------------
// Map stores key-value pairs where keys can be any type.

const myMap = new Map();

// Add values
myMap.set("name", "Sara");
myMap.set(1, "Number Key");
myMap.set(true, "Boolean Key");

// Get value
console.log(myMap.get("name")); // Sara

// Check if key exists
console.log(myMap.has(1)); // true

// Delete a key
myMap.delete(true);

// Size
console.log(myMap.size); // 2

// Iterate through Map
for (let [key, value] of myMap) {
  console.log(key, "=>", value);
}

// Edge Case:
// Keys are compared by reference (objects not equal even if identical)
const obj1 = { a: 1 };
const obj2 = { a: 1 };
myMap.set(obj1, "Object1");
console.log(myMap.get(obj2)); // undefined


// ----------------------
// 🔸 Set
// ----------------------
// Set stores unique values (no duplicates).

const mySet = new Set();

// Add values
mySet.add(10);
mySet.add(20);
mySet.add(10); // ignored (duplicate)

// Check existence
console.log(mySet.has(10)); // true

// Delete element
mySet.delete(20);

// Iterate
for (let val of mySet) console.log(val);

// Convert Set → Array
const arrFromSet = [...mySet];
console.log(arrFromSet);

// Edge Case:
// Set only checks value, not index or type coercion


// ==========================================================
// 🔹 3. JavaScript Events
// ==========================================================
//
// Events are actions triggered by user or browser (click, keypress, load, etc.)

// ----- Inline Event Example -----
// <button onclick="showMessage()">Click Me</button>
function showMessage() {
  alert("Button clicked!");
}

// ----- addEventListener Example -----
const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
  console.log("Button clicked using event listener");
});

// ----- Event Object -----
btn.addEventListener("click", function (event) {
  console.log("Event Type:", event.type);
  console.log("Target Element:", event.target);
});

// ----- Removing Event Listener -----
function greet() {
  console.log("Hello");
}
btn.addEventListener("click", greet);
btn.removeEventListener("click", greet);

// ----- Mouse & Keyboard Events -----
document.addEventListener("keydown", e => {
  console.log("Key Pressed:", e.key);
});

document.addEventListener("mouseover", () => {
  console.log("Mouse Over Detected!");
});


// ==========================================================
// 🔹 4. JavaScript OOP (Object-Oriented Programming)
// ==========================================================
//
// JavaScript uses prototype-based OOP. ES6 introduced `class` syntax.

// ----------------------
// 🔸 Class & Object
// ----------------------
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, I am ${this.name}, age ${this.age}`);
  }
}

const s1 = new Student("Sara", 18);
s1.greet();

// ----------------------
// 🔸 Inheritance
// ----------------------
class Graduate extends Student {
  constructor(name, age, degree) {
    super(name, age); // call parent constructor
    this.degree = degree;
  }

  showDegree() {
    console.log(`${this.name} holds a degree in ${this.degree}`);
  }
}

const g1 = new Graduate("Rina", 22, "Computer Science");
g1.greet();
g1.showDegree();


// ----------------------
// 🔸 Encapsulation (using #private fields)
// ----------------------
class BankAccount {
  #balance = 0; // private variable

  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000


// ----------------------
// 🔸 Polymorphism (Method Overriding)
// ----------------------
class Animal {
  speak() {
    console.log("Animal sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}
let pet = new Dog();
pet.speak(); // Woof!


// ----------------------
// 🔸 Abstraction (via classes & methods)
// ----------------------
class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented!");
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.w = w;
    this.h = h;
  }
  area() {
    return this.w * this.h;
  }
}
const rect = new Rectangle(5, 10);
console.log(rect.area()); // 50


// ==========================================================
// 🔹 5. Summary
// ==========================================================
//
// Topic          | Purpose                              | Key Methods
// ----------------|--------------------------------------|---------------------------
// Exception Handling | Handle runtime errors              | try, catch, finally, throw
// Map             | Key-value collection                 | set(), get(), has(), delete()
// Set             | Unique value collection              | add(), has(), delete()
// Events          | React to user/browser actions        | addEventListener(), removeEventListener()
// OOP             | Model real-world entities in code    | class, inheritance, encapsulation, polymorphism
