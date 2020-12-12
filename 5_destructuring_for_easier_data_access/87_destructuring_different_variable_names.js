let node = {
    type : "Identifier",
    name : "foo"
};

// declares local vairblae localType and localName and destructures into them.
let { type: localType, name: localName} = node;

console.log(localType);
console.log(localName);

// default values can also be added

let node2 = {
    type : "Identifier",
    name : "foo"
};

// declares new variables localType and localName and destructures into them.
let { type: localType2, name: localName2} = node2;

console.log(localType2);
console.log(localName2);