// In ES5

let options = {
    repeat: true,
    save : false
}

// to extract data from object

let repeat = options.repeat, 
save = options.save;

// ES6 adds destructuring for object and arrays

let node = {
    type : "Identifier",
    name : "foo"
}

let { type, name } = node;

console.log(type); // Identifier
console.log(name); // foo