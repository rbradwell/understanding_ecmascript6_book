"use strict";

if (true) {
    // declaring a function in a block 
    // throws a syntax error in ES5 (using strict), not so in ES6

    console.log(typeof doSomething); // function i.e. it's hoisted to top of block

    function doSomething() {
        console.log("done something");
    }

    doSomething();
}

console.log(typeof doSomething); // undefined, only exists in block

// note if you use let the function is not hoisted

if (true) {
    console.log(typeof doSomething2); // throws an error because doSomething2 in TDZ because let not executed yet

    let doSomething2 = function() {
        console.log("done something2");
    }

    doSomething2();

}

// NOTE: In ES6 if non strict mode is used the behaviour is different
// the declaration doesn't get hoisted to the top of the block but to the top of containing function or global environment
