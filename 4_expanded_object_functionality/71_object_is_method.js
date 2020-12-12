/**
  In ES6 the object global received an increasing number of methods when no other objects are more appropriate

  - the Object.is() method
  To compare obejcts developers use equals operator (==) or identically equal operator (===)
  Usually later is perferred to avoid type coercion.
  Even this isn't entirely accurate.
  Object.is() returns true if two objects have the same type and the same value
 **/

 // the first two lines get the wrong answer
 console.log(+0 == -0); // true 
 console.log(+0 === -0); // true 
 // fixed using the new Object.is
 console.log(Object.is(+0, -0)); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false . Note: because of this most people used NaN previously to detect if not a number
console.log(Object.is(NaN, NaN)); // true

console.log(5 == 5); //true
console.log(5 == "5"); // true
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(Object.is(5,5)); // true
console.log(Object.is(5,"5")); // false
