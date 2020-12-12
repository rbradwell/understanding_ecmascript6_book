let node = {
    type : "Identifier",
    name : "foo"
};

// this destrucuring decalres new varaiable value also, which is initially undefined
let { type, name , value } = node;
console.log(type); // Identifier
console.log(name); // foo
console.log(value); // undefined

// rather than undefined a default value can be set
let node2 = {
    type2 : "Identifier",
    name2 : "foo"
};

let { type2, name2 , value2 = true } = node2;

console.log(type2); // Identifier
console.log(name2); // foo
console.log(value2); // true