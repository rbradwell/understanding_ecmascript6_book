// p26
// template literals provide
// 1. multiline strings
// 2. basic string substitution i.e formatting
// 3. html escaping

function hw(message){
    console.log(message);
    console.log(typeof message);
    console.log(message.length);    
}

hw(`Hello World!`);

// a backtick can be used in a string if escaped

hw(`\`Hello World!\``);