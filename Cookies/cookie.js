// =============================
// 🍪 JavaScript Cookies (Complete Notes)
// =============================

// 🔹 What is a Cookie?
// A cookie is a small piece of data stored in the user's browser.
// Cookies are used to store user preferences, login info, and session data.

// Basic syntax:
// document.cookie = "key=value; expires=date; path=/"


// ===================================
// 🔹 1. Create a Cookie
// ===================================
document.cookie = "username=Sarina";  
// Default cookie (deleted when browser closes)

// Adding more details:
document.cookie = "userId=101; path=/";  
// path=/ → cookie accessible on all pages of the domain

// 🔸 With Expiry Date
document.cookie = "token=abc123; expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/";

// 🔸 With Secure Flag
document.cookie = "sessionID=999; secure";  
// secure → cookie sent only over HTTPS

// 🔸 With SameSite Attribute
document.cookie = "theme=dark; SameSite=Strict";  
// prevents sending cookie on cross-site requests


// ===================================
// 🔹 2. Read a Cookie
// ===================================

console.log(document.cookie);  
// Returns all cookies as a single string: "username=Sarina; userId=101; token=abc123"

// Parsing cookies manually:
function getCookieValue(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

// Example:
console.log(getCookieValue("username")); // "Sarina"
console.log(getCookieValue("nonexistent")); // null


// ===================================
// 🔹 3. Update a Cookie
// ===================================

document.cookie = "username=Sarina Khan; path=/";  
// Writing a cookie with same name updates it automatically.


// ===================================
// 🔹 4. Multiple Cookies
// ===================================

document.cookie = "lang=en; path=/";
document.cookie = "country=India; path=/";

console.log(document.cookie);
// "username=Sarina Khan; userId=101; token=abc123; lang=en; country=India"


// ===================================
// 🔹 5. Delete a Cookie
// ===================================

// To delete → set expiry date in the past
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// Verify:
console.log(document.cookie);


// ===================================
// 🔹 6. Cookie Attributes Summary
// ===================================
//
//  Attribute   | Description
//  ------------ | ---------------------------
//  expires      | Set expiry date for cookie
//  path         | Path where cookie is accessible
//  domain       | Domain of cookie (optional)
//  secure       | Cookie sent only over HTTPS
//  SameSite     | Restricts cross-site access (Lax, Strict, None)


// ===================================
// 🔹 7. Edge Cases & Best Practices
// ===================================
//
// 1. Max cookie size ≈ 4KB per domain.
// 2. Use encodeURIComponent() / decodeURIComponent() for special characters.
// 3. Avoid storing sensitive data (like passwords).
// 4. Cookies are sent with every request → increases load if large.
// 5. Modern apps prefer localStorage/sessionStorage for larger data.


// Example with encoding:
let userPref = "Dark Theme";
document.cookie = "preference=" + encodeURIComponent(userPref);
console.log(decodeURIComponent(getCookieValue("preference"))); // "Dark Theme"
