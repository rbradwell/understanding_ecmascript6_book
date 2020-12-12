// in browser

// using var the variable in the global scope creates a new global variable
// which is a propery on the global object (window in browsers)
// this meant that existing global vars can be accidentally overwritten

var RegExp = "Hello!";
console.log(window.RegExp);  // "Hello!"
console.log("Hello!" in window) // true

// using let or const in the global scope creates a new binding in the global scope
// however no property is added to the global object
// a new let creates a binding that shadows the global variable with the same name
let regExp2 = "Hello!";
console.log(regExp2); // "Hello!"
console.log(window.regExp2 === regExp2); // false, making this much safer than equivalent using var
console.log(regExp2 in window); // false

