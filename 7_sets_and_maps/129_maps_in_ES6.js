let map = new Map();
map.set("title", "Understanding ECMAScript 6");
map.set("year", "2016");

console.log(map.get("title")); // Understanding ECMAScript 6
console.log(map.get("year")); // 2016

// you can also use objects as keys
let map2 = new Map(), key1 = {}, key2 = {};

map.set(key1, 5);
map.set(key2, 42);

console.log(map.get(key1)); // 5
console.log(map.get(key2)); // 42