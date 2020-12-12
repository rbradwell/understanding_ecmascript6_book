// normal sets are called a strong set becuase of the way it stores object references
let set = new Set(), key = {};

set.add(key);
console.log(set.size); // 1

// eliminate original reference, but another reference remains inside the set
key = null;

console.log(set.size); // 1

// get the original reference back, it's not garbage collected
key = [...set][0];

// using weak set ...

let set2 = new WeakSet(), key2 = {};

set2.add(key2);

console.log(set2.has(key2)); // true

set2.delete(key2);

console.log(set2.has(key2)); // false

// you can seed a weak set with values passed by an iterable to the constructor

let key3 = {}, key4 = {}, set3 = new WeakSet([key3, key4]);
console.log(set3.has(key3)); // true
console.log(set3.has(key4)); // true

// weaksets can't contain primitive values

// p128 outlines differences between weak and strong sets