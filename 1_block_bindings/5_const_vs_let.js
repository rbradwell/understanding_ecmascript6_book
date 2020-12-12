// page 5 - const is block scoped like let
if (condition) {
    const maxItems = 5;
    // more code
}
// maxItems isn't accessible here

var message = "Hello";
let age = 25;
// like let, const will throw an error when the identifier already exists within the scope
// i.e. each of the following throws an error

const message = "Goodbye";
const age = 6;

// one difference between let and cost is that attempting to assign a previously defined
// const throws an error in both strict and non-script modes.

// What the heck is strict and non strict mode anyway?  See below
// http://imaginativethinking.ca/what-the-heck-is-node-modules-strict-by-default/