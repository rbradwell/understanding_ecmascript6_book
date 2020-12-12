// p38 - 39

function mixArgs(first, second) {
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);    
}

mixArgs("a","b");

// output: true, true, true, true
// arguments are updated as soon as parameters are reassigned in non-strict mode.

function mixArgs2(first, second) {
    "use strict";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);    
}

// this uses strict mode and doesn't update parameters 
// output: true, true, true, false, false
mixArgs2("a","b");

// ES6 default parameters behave like es5 strict mode

function mixArgs3(first, second = "b") {
    console.log(arguments.length);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);    
}

mixArgs3("a");

// output
// 1 - only one argument past in
// changing first and second has no effect on arguments in either none-strict or strict modes

// p40-41 - not done