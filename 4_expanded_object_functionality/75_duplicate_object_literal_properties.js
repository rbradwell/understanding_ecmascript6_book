"use strict"

var person = {
    name: "Nicholas",
    name: "Greg" // duplicate property.  no error in ES6 strict mode.  This was a syntax error in ES5
}

console.log(person); // { name: 'Greg' }