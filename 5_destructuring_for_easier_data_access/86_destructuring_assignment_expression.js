let node = {
    type : "Identifier",
    name : "foo"
},
type = "Literal",
name = 5;

function outputInfo(value) {
    console.log(value); // { type: 'Identifier', name: 'foo' }
    console.log(value === node); // true
}
// the function is called with a destructuring assignment expression
outputInfo({ type, name } = node);
console.log(type); // Identifier
console.log(name); // foo