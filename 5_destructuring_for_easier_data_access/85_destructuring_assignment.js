let node = {
    type : "Identifier",
    name : "foo"
},
type = "Literal",
name = 5;

console.log(type); // Literal
console.log(name); // 5

// assign different values using destructuring
({ type, name} = node);

console.log(type); // Identifier
console.log(name); // foo