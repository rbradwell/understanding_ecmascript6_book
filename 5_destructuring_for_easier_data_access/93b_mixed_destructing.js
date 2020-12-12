let node = {
    type : "identifier",
    name: "foo",
    loc: {
        start: {
            line:1,
            column:1
        },
        end: {
            line:1,
            column:4           
        }
    },
    range: [0,3]
};

let {
    loc: { start },
    range: [ startIndex ]
} = node;

console.log(start.line); // 1
console.log(start.column); // 1
console.log(startIndex); // 0

// This is particularly usefull for pulling values out of JSON configuration without navigating the entire structure.