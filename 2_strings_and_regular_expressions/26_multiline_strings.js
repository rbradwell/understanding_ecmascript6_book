let message = `Multiline
String` ;

console.log(message);
console.log(message.length);

// if you want to line up tags a technique is to miss first line, then remove those spaces with trim later.
let html = `
<div>
    <h1>Title</h1>
</div>
`.trim();

// the newlines can be put in explicitly
let message2 = `Multiline\nstring`;
console.log(message2);

// substitutions can be performed
let name = 'Richard', message3 = `Hello, ${name}.`;
console.log(message3);

// substitute are Javascript expressions
let count=10, 
price=0.25,
message4=`${count} items cost $${(count * price).toFixed(2)}.` 
console.log(message4);

// template literals can be embedded

let name2= "Richard",
    message5 = `Hello , ${ `my name is ${ name2 }`}`;

console.log(message5);