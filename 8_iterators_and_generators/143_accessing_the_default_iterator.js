let values = [1,2,3];
// use the Symbol.iterator to access the default iterator on the object
// this is what happens behind the schenes when using for-of loop.
let iterator = values[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// because Symbol.iterator specifies the default iterator, it can be used to detect in an object is itrerable

function isIterable(object) {
    return typeof object[Symbol.iterator] === "function";
}

console.log(isIterable([1,2,3])); // true
console.log(isIterable("Hello")); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log(isIterable(new WeakMap())); // false
console.log(isIterable(new WeakSet())); // false