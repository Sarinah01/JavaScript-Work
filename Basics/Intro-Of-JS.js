// ==========================================
// JAVASCRIPT BASICS - COMPLETE NOTES
// ==========================================

// --------------------
// 1. JavaScript Tutorial & Features
// --------------------
// JavaScript is a lightweight, interpreted, or JIT-compiled programming language.
// It is primarily used to make web pages interactive.

// Key Features:
// - Lightweight and interpreted
// - Cross-platform
// - Object-oriented
// - Dynamic typing
// - First-class functions
// - Event-driven and asynchronous capabilities

// --------------------
// 2. JavaScript Versions
// --------------------
// - ES5 (2009): Introduced JSON, Array methods (forEach, map, filter).
// - ES6 (2015): Introduced let, const, arrow functions, classes, promises, template literals.
// - ES7+ (Later): Introduced async/await, optional chaining, nullish coalescing.

// --------------------
// 3. Difference Between Java and JavaScript
// --------------------
// Java:
//   - Object-oriented programming language
//   - Compiled and runs on JVM
//   - Strongly typed
//
// JavaScript:
//   - Scripting language for the web
//   - Interpreted by browsers
//   - Dynamically typed

// --------------------
// 4. Hello World Program
// --------------------
console.log("Hello, World!");  // Outputs: Hello, World!

// --------------------
// 5. JavaScript Syntax
// --------------------
// Case-sensitive
// Statements end with semicolon (;)
// Blocks enclosed in {}

// Example:
let x = 5;
let y = 10;
console.log(x + y);

// --------------------
// 6. JavaScript Operators
// --------------------
// Arithmetic: +, -, *, /, %, ** (exponentiation)
// Assignment: =, +=, -=, *=, /=
// Comparison: ==, ===, !=, !==, >, <, >=, <=
// Logical: &&, ||, !
// Ternary: condition ? value1 : value2

// Example:
let a = 10;
let b = 20;
console.log(a + b);   // 30
console.log(a > b);   // false
console.log(a == 10 && b == 20); // true

// --------------------
// 7. JavaScript Comments
// --------------------
// Single line comment
/* Multi-line
   comment */

// --------------------
// 8. Variables and Data Types
// --------------------

// Variables are used to store data.
// Data types in JavaScript:
// Primitive: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non-primitive: Object, Array, Function

let name = "Alex";        // String
let age = 25;             // Number
let isStudent = true;     // Boolean
let marks;                // Undefined
let emptyValue = null;    // Null

// --------------------
// 9. JavaScript var, let, const
// --------------------

// var - function-scoped, can be redeclared
var x1 = 10;
var x1 = 20; // Allowed

// let - block-scoped, cannot be redeclared
let x2 = 30;
// let x2 = 40; // Error

// const - block-scoped, cannot be reassigned
const PI = 3.14;
// PI = 3.1415; // Error

// --------------------
// 10. Difference between var, let, and const
// --------------------
/*
| Feature           | var              | let               | const            |
|-------------------|------------------|-------------------|------------------|
| Scope             | Function         | Block             | Block            |
| Redeclaration     | Allowed          | Not allowed       | Not allowed      |
| Reassignment      | Allowed          | Allowed           | Not allowed      |
| Hoisting          | Yes (undefined)  | Yes (TDZ)         | Yes (TDZ)        |
*/

// --------------------
// 11. JavaScript Global Variables
// --------------------
// Variables declared outside any function are global.
// They can be accessed anywhere in the script.

let globalVar = "Accessible everywhere";

function showGlobal() {
  console.log(globalVar);
}
showGlobal(); // Accessible everywhere

// --------------------
// 12. Control Statements
// --------------------

// if-else
let num = 10;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// switch
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}

// --------------------
// 13. JavaScript Loops
// --------------------

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

// while loop
let i = 1;
while (i <= 3) {
  console.log("While Loop:", i);
  i++;
}

// do-while loop
let j = 1;
do {
  console.log("Do-While Loop:", j);
  j++;
} while (j <= 2);

// --------------------
// 14. for...of loop (Iterates over iterable objects)
// --------------------
let arr = [10, 20, 30];
for (let value of arr) {
  console.log("for...of:", value);
}

// --------------------
// 15. for...in loop (Iterates over object keys)
// --------------------
let person = { name: "Alex", age: 25 };
for (let key in person) {
  console.log(key, ":", person[key]);
}

// --------------------
// 16. return Statement
// --------------------
// Used to return a value from a function

function addNumbers(a, b) {
  return a + b;
}
let sum = addNumbers(5, 10);
console.log("Sum:", sum);
