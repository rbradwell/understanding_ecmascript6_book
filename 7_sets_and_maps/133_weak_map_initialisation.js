let key1 = {}, 
key2 = {},
map = new WeakMap([[key1, "hello"],[key2, 42]]);

console.log(map.has(key1)); // true
console.log(map.has(key2)); // true
console.log(map.get(key1)); // hello
console.log(map.get(key2)); // 42