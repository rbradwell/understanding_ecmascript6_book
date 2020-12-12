// Useful resource https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/
// In ES6 symobls are a primitive 
// ES5 already has string, numbers, boolean, null, undefined.
// symbols began as a way to create private object members
// later privacy goal was dropped.

// create a symbol using the global Symbol function.

let firstName = Symbol();
let person = {};

person[firstName] = "Nicholas";
console.log(person[firstName]); // Nicholas

// you can also create symbol with a description to make reading/debugging easier


let firstName2 = Symbol("fist name 2");
let person2 = {};

person2[firstName2] = "Nicholas2";
console.log(person2[firstName2]); // Nicholas2
console.log(firstName2); // Symbol(fist name 2)

// A smybol's description is stored internally in the [[Description]] property

console.log(typeof firstName); // symbol