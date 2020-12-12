// p54, 56, p57
// no this, super, arguents and new.target bindings
// have no [[Construct]] method and therefore can't be called with new.  If used with new then throws error.
// no prototype property for arrow function
// 'this' immutable inside the arrow function.
// no arguments object binding

// arrow functions DO have a name property

// this ...

let reflect = value => value; // NOTE: expression doesn't need a return value

// is effectively equivalent to:

let reflect2 = function(value) {
    return value;
}

// if passing more than one arg then require parenthesis

let sum = (num1, num2) => num1 + num2;

// if there are no arguments to the function, you must include an empty set of parenthesis in the declaration

let getName = () => "Nicholas";

// when you want to provide more than one expression wrap body in curly braces

let sum2 = (num1, num2) => {
    return num1 + num2;
}

// if you want to declare a function that does nothing include curly braces e.g.
let doNothing = () => {};

// an arraow function that wants to return an object literal outside a function must wrap the literal in parentheses.
// i.e.

let getTempItem = id => ({ id: id, name: "Temp" });

// is effectively equivalent to 

let getTempItem = function(id) {
    return {
    id: id,
    name: "Temp"  
    };
}

