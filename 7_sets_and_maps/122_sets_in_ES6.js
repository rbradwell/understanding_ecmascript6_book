let set = new Set();
set.add(5);
set.add("5");
console.log(set.size); // 2
// note: unlike the ES5 workaround for sets using objects, 5 doesn't get converted into "5" and herefoer 2 items in set.

let set2 = new Set();
key1 = {};
key2 = {};

set.add(key1);
set.add(key2);

// if multiple objects are added they also stay distinct.  
console.log(set.size); // 2

let set3 = new Set();
set3.add(5);
set3.add(5);
set3.add("5");
console.log(set.size); // 2 - duplicates are ignored

// a set can be initialised using an array - the constructor actually accepts any iterable object as arguments.
let set4 = new Set([1, 2,3, 4, 5, 5, 5, 5])
console.log(set4.size); // 5

// test if a value is in set using has

let set5 = new Set();
set5.add(5);
set5.add("5");
console.log(set5.has(5)); // true
console.log(set5.has(6)); // false

console.log(set5.size); // 2

// items can be removed from set
set5.delete(5);
console.log(set5.has(5)); // false

console.log(set5.size); // 1

set5.clear(); // totally clear set

console.log(set5.size); // 0

