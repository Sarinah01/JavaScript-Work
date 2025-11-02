// =======================================================
// JAVASCRIPT FUNCTIONS, OBJECTS, ARRAYS, STRINGS, DATE,
// MATH, ADVANCED FUNCTIONS, PROMISES & ASYNC/AWAIT
// =======================================================


// ===============================
// 1. JavaScript Functions
// ===============================

// Function Declaration
function greet() {
  console.log("Hello World");
}
greet();

// Function with Parameters
function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); // 15

// Function Expression
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 3)); // 12

// Default Parameters
function greetUser(name = "Guest") {
  console.log("Hello " + name);
}
greetUser(); // Hello Guest

// Hoisting
// Function declarations are hoisted (can be called before defined)
hoistedFunc();
function hoistedFunc() {
  console.log("This function is hoisted!");
}

// Anonymous Function
// Function without a name (used in expressions or callbacks)
const sayHi = function() {
  console.log("Hi!");
};
sayHi();

// call(), apply(), bind()
// call() - invoke with custom 'this' and args
const person1 = { name: "Alex" };
function introduce(age, city) {
  console.log(`${this.name} is ${age} years old from ${city}`);
}
introduce.call(person1, 22, "Delhi"); // call with arguments

// apply() - same as call(), but args as array
introduce.apply(person1, [22, "Delhi"]);

// bind() - returns new function with bound 'this'
const introFunc = introduce.bind(person1, 22, "Delhi");
introFunc(); // Alex is 22 years old from Delhi


// ===============================
// 2. JavaScript Objects
// ===============================
const car = {
  brand: "BMW",
  model: "X5",
  start: function() {
    console.log(`${this.brand} started`);
  }
};
console.log(car.brand); // BMW
car.start();

// Object Methods
Object.keys(car);   // ["brand", "model", "start"]
Object.values(car); // ["BMW", "X5", f]
Object.entries(car); // [["brand","BMW"],["model","X5"],["start",f]]
delete car.model; // deletes property


// ===============================
// 3. JavaScript Arrays
// ===============================
const arr = [10, 20, 30, 40];

// Common Array Methods
arr.push(50);    // adds at end
arr.pop();       // removes last
arr.shift();     // removes first
arr.unshift(5);  // adds at beginning
console.log(arr.includes(20)); // true

// Higher-order array methods
const nums = [1, 2, 3, 4, 5];
nums.map(n => n * 2);          // [2,4,6,8,10]
nums.filter(n => n > 2);       // [3,4,5]
nums.reduce((a,b) => a + b);   // 15
nums.find(n => n === 3);       // 3
nums.forEach(n => console.log(n)); // iterate


// ===============================
// 4. JavaScript Strings
// ===============================
let text = "JavaScript";

console.log(text.length);           // 10
console.log(text.toUpperCase());    // JAVASCRIPT
console.log(text.toLowerCase());    // javascript
console.log(text.includes("Script")); // true
console.log(text.slice(0, 4));      // Java
console.log(text.replace("Java", "Type")); // TypeScript


// ===============================
// 5. JavaScript Date
// ===============================
const now = new Date();
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());


// ===============================
// 6. JavaScript Math
// ===============================
console.log(Math.PI);         // 3.14159
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.max(1, 5, 10)); // 10
console.log(Math.random());   // random 0-1


// ===============================
// 7. JavaScript Number
// ===============================
let num = 123.456;
console.log(num.toFixed(2));  // "123.46"
console.log(Number.isInteger(10)); // true
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.33")); // 12.33


// ===============================
// 8. JavaScript Boolean
// ===============================
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean("")); // false
console.log(Boolean("text")); // true


// ===============================
// 9. Advanced Functions
// ===============================

// Closures
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2

// Arrow Functions
const addNum = (a, b) => a + b;
console.log(addNum(2, 3)); // 5

// Callback Function
function processUserInput(callback) {
  const name = "Alex";
  callback(name);
}
processUserInput((name) => console.log("Hello " + name));

// Higher-Order Function (takes/returns function)
function higherOrder(fn, value) {
  return fn(value);
}
function square(x) { return x * x; }
console.log(higherOrder(square, 5)); // 25

// setTimeout
setTimeout(() => console.log("Executed after 2 sec"), 2000);

// setInterval
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log("Count:", count);
  if (count === 3) clearInterval(interval);
}, 1000);

// Event Loop Concept
// JS executes synchronous code first, then async callbacks from queue.
console.log("Start");
setTimeout(() => console.log("Async code"), 0);
console.log("End");
// Output order: Start → End → Async code


// ===============================
// 10. Promises & Async/Await
// ===============================

// Promise Creation
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Task done!");
  else reject("Error occurred");
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Promise settled"));

// Promise Chaining
new Promise((resolve) => resolve(2))
  .then(num => num * 2)
  .then(num => num + 3)
  .then(result => console.log(result)); // 7

// Promise.any()
const p1 = Promise.reject("Error");
const p2 = Promise.resolve("Success");
Promise.any([p1, p2])
  .then(res => console.log(res)); // Success

// Promise.allSettled()
const p3 = Promise.resolve("Done");
const p4 = Promise.reject("Fail");
Promise.allSettled([p3, p4]).then(results => console.log(results));

// Promise.finally()
Promise.resolve("Complete")
  .finally(() => console.log("Cleaning up"))
  .then((msg) => console.log(msg));

// Async / Await
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

async function getData() {
  console.log("Fetching...");
  const data = await fetchData();
  console.log(data);
}
getData();
