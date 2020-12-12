// p19
// in ES 5 the indexOf() method used to identify strings inside other strings

// ES6 - 

let test = "This is a test";
console.log(test.includes("is")); // true

console.log(test.startsWith("fish")); // false

console.log(test.startsWith("This")); // true

console.log(test.endsWith("fish")); // false

console.log(test.startsWith("test")); // true

// a start index can also be passed to some of the functions above
// functions above don't take regular expressions unlike indexOf() and lastIndexOf()

console.log("x".repeat("3")) ; "xxx"

// repeat can be useful as follows

let indent = " ".repeat(4), indentLevel = 1;
let newIndent = indent.repeat(++indentLevel);