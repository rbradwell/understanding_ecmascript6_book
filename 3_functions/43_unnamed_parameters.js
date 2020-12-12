// p43-46
// Javascript doesn't limit the number of parameters passed.
// can pass fewer or more than the named parameters.

// this is how to do it in ECMAScript 5
// below mimics pick in underscore.js

function pick(object){
    let result = Object.create(null);
    // start at the second parameter
    for (let i = 1, len = arguments.length; i< len;i++){
        result[arguments[i]] = object[arguments[i]];
    }
    return result;
}

let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    year:2016
};

let bookData = pick(book, "author", "year");

console.log(bookData.author);
console.log(bookData.year);

// es6 introduces Rest parameters
// there must be only one rest parameter and it must be the last one
function pick2(object, ...keys){
    let result  = Object.create(null);

    for (let i=0,len=keys.length;i<len; i++) {
        result[keys[i]] = object[keys[i]];
    }

    return result;
}


let bookData2 = pick2(book, "author", "year");

console.log(bookData2.author);
console.log(bookData2.year);

// rest paramters were meant to replace arguments
// however arguments always reflects parameters passed in 
function checkArgs(...args){
    console.log(args.length);
    console.log(args[0], arguments[0]);
    console.log(args[1], arguments[1]);
}

checkArgs("a", "b")