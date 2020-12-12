let map = new Map([ ["name", "Nicholas"], ["age", 25] ]);

console.log(map.has("name")); // true
console.log(map.get("name")); // Nicholas
console.log(map.has("age")); // true
console.log(map.get("age")); // 25
console.log(map.size); // 2

// can iterate over map

map.forEach(function(value, key, ownerMap){
    console.log(key + " " + value);
    console.log(ownerMap === map);
});