// p60
/**
 * Eventhough arrow functions don't have thre own arguments object, they can access those of containing function
 */

function createArrowFunctionReturningFirstArg() {
    return () => arguments[0];
}

var arrowFunction = createArrowFunctionReturningFirstArg(5);

console.log(arrowFunction()); // 5

// arrow functions are still identified as functions

var comparator = (a,b) => a - b;

console.log(typeof comparator); // function
console.log(comparator instanceof Function); // true

// call(), apply(), bind() can still be used on arrow functions without the 'this' being affected e.g.

var sum = (num1, num2) => num1 + num2;

console.log(sum.call(null, 1, 2)); // 3
console.log(sum.apply(null,[1, 2])); // 3

var boundSum = sum.bind(null, 1, 2); // 3

console.log(boundSum());

// arrow functions are appropriate for anywhere an anonymous function is currently used, such as callbacks.