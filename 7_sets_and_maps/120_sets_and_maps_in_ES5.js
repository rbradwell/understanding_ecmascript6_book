// In ES5 developers mimicked sets and maps using object properties

var set = Object.create(null); // null prototype i.e. no inherited properties

// using object as a set
set.foo = true;

// check for existence

if (set.foo){
    console.log("set contains foo");
}

// using object as a map

var map = Object.create(null); 
map.foo = "bar";

var value = map.foo;

console.log(value);

// there are issus with using an object as map
// for example if a key is a number then that gets converted to a string.  i.e. map[5] becomes map["5"], so they reference the same property

// using objects as keys is also an issue, see below

var map2 = Object.create(null),
    key1 = {},
    key2 = {};
map[key1] = "foo";

// map[key1] and map[key2] reference the same value because converted to strings they are both [object object]
console.log(map[key2]); // "foo"

// also keys whose value is falsy has issues

var map3 = Object.create(null);
map.count=1;
if (map.count) {
    //
}
// is the intention of the if statement to check the existence of map.count or whether the value is none zero.