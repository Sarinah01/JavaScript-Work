// =====================================================
// 🌐 JavaScript DOM + JSON + Validation (Complete Notes)
// =====================================================


// ===================================
// 🔹 1. JavaScript DOM (Document Object Model)
// ===================================
//
// DOM represents the structure of an HTML page as a tree.
// JavaScript can manipulate HTML and CSS via the DOM.

// Example HTML:
// <h1 id="title">Hello</h1>
// <p class="text">Paragraph 1</p>
// <p class="text">Paragraph 2</p>


// ----- getElementById -----
let heading = document.getElementById("title");
console.log(heading.innerText); // "Hello"
heading.style.color = "blue"; // change text color
heading.innerText = "Updated Title"; // modify content

// Edge case: returns null if ID not found
console.log(document.getElementById("wrongID")); // null


// ----- getElementsByClassName -----
let paragraphs = document.getElementsByClassName("text");
for (let p of paragraphs) {
  p.style.fontWeight = "bold";
}
// Returns HTMLCollection (live)


/* ----- getElementsByTagName ----- */
let divs = document.getElementsByTagName("div");
for (let d of divs) d.style.border = "1px solid gray";


// ----- getElementsByName -----
let inputs = document.getElementsByName("gender");
inputs.forEach(i => console.log(i.value));
// Usually used for form fields


// ----- querySelector & querySelectorAll -----
let firstPara = document.querySelector(".text"); // first match
let allPara = document.querySelectorAll(".text"); // NodeList of all matches


// ----- innerHTML vs innerText -----
let demo = document.getElementById("demo");
demo.innerHTML = "<b>Bold Text</b>";  // renders HTML
demo.innerText = "<b>Plain Text</b>"; // shows as plain text

// Edge case: innerHTML can cause XSS if inserting user input directly


// ----- Modifying attributes -----
let img = document.getElementById("logo");
img.src = "image.png";
img.alt = "Website Logo";


// ===================================
// 🔹 2. JSON (JavaScript Object Notation)
// ===================================
//
// JSON = lightweight data format used for API and data exchange.
// Syntax = key-value pairs in double quotes.

const jsonStr = '{"name":"Sarina","age":18,"active":true}';
const obj = JSON.parse(jsonStr);  // Convert string → object
console.log(obj.name); // Sarina

// Edge case: invalid JSON throws SyntaxError
// JSON.parse("{name:'Sara'}"); ❌ invalid, keys must use double quotes


// Convert JS Object → JSON string
const jsObj = { name: "Sara", city: "Delhi" };
const jsonString = JSON.stringify(jsObj);
console.log(jsonString); // {"name":"Sara","city":"Delhi"}

// Functions, undefined, and symbols are ignored when stringifying
const person = { name: "Sara", greet: () => "hi" };
console.log(JSON.stringify(person)); // {"name":"Sara"}


// Example: Convert Array of Objects
const users = [
  { id: 1, name: "Sara" },
  { id: 2, name: "Rina" }
];
const jsonData = JSON.stringify(users);
console.log(JSON.parse(jsonData)); // back to JS array


// ===================================
// 🔹 3. JavaScript Validation
// ===================================
//
// Used to verify user input before form submission.


// ----- Basic Form Validation -----
function validateForm() {
  const name = document.getElementById("username").value;
  if (name.trim() === "") {
    alert("Name cannot be empty!");
    return false;  // stops form submission
  }
  return true;
}


// ----- Email Validation using Regex -----
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Example:
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid@.com")); // false


// ----- Numeric Validation -----
function validateAge(age) {
  if (isNaN(age) || age <= 0) {
    return "Invalid age";
  }
  return "Valid age";
}
console.log(validateAge(18)); // Valid age


// ===================================
// 🔹 4. Form Validation Example (Complete)
// ===================================
/*
<form onsubmit="return validateUser()">
  <input id="email" placeholder="Enter email" />
  <input id="password" type="password" />
  <button type="submit">Submit</button>
</form>
*/

function validateUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!validateEmail(email)) {
    alert("Enter a valid email!");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}


// ===================================
// 🔹 5. Summary
// ===================================
//
// Concept     | Description                             | Common Methods
// ------------|-----------------------------------------|----------------
// DOM          | Interacts with HTML elements           | getElementById, innerHTML
// JSON         | Data format for APIs                   | JSON.parse(), JSON.stringify()
// Validation   | Ensures input correctness               | Regex, conditions, form checks
//
// Best Practice: Always sanitize and validate user inputs.
