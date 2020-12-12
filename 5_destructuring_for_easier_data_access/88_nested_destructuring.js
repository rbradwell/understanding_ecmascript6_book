let node = {
    type : "Identifier",
    name: "foo",
    loc : {
        start : {
            line: 1,
            column: 1
        },
        end : {
            line: 1,
            column:4
        }
    }
};

// look into loc, start for destructuring
let {loc: {start}} = node;

console.log(start.line);
console.log(start.column)

// a different name can be used for the local variable also

let {loc: {start : localStart }} = node;

console.log(localStart.line);
console.log(localStart.column)

// NOTE: destructing patterns can be nested to an arbitray level of depth