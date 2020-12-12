let items = new Array(2);
// when passing in a single numeric values length set to value passed in BAD!
console.log(items.length); // 2
console.log(items[0]); // undefined
console.log(items[1]); // undefined

// single non numeric passes value becomes one and only item in the array
items = new Array("2");
console.log(items.length); // 1
console.log(items[0]); // "2"

// multiple items passed in (numeric or not) those become array value.
// risy because might not always be aware of type passed in
items = new Array(1,2);
console.log(items.length); // 2
console.log(items[0]); // 1
console.log(items[1]); // 2

items = new Array(3,"2");
console.log(items.length); // 2
console.log(items[0]); // 3
console.log(items[1]); // "2"

// ES6 introduces Array.of() to the solve the problem.
// Works like Array constructor above but has no special case for single numeric value.

let items2 = Array.of(1,2);
console.log(items2.length); // 2
console.log(items2[0]); // 1
console.log(items2[1]); // 2

items2 = Array.of(2);
console.log(items2.length); // 1
console.log(items2[0]); // 2

items2 = Array.of("2");
console.log(items2.length); // 1
console.log(items2[0]); // "2"

// NOTE: Array.of() method doesn't use Symbol.species property to determine return type.
// It uses the current constructor ('this' inside of the of() method) to determine return type.