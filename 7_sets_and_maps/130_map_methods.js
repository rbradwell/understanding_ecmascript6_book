let map = new Map();
map.set("name","Nicholas");
map.set("age", 25);

console.log(map.size); // 2

console.log(map.has("name")); // true

map.delete("name");

console.log(map.has("name")); // false

console.log(map.size); // 1

map.clear();

console.log(map.has("age")); // false

console.log(map.size); // 0