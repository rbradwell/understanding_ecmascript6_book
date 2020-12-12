// p48 - 49

// ES6 introduces a name that all functions have, making debugging easier

function doSomething(){
    // empty
}

var doAnotherThing = function() {
    // empty
}

console.log(doSomething.name); // doSomething
console.log(doAnotherThing.name); // doAnotherThing

var doSomething2 = function doSomethingElse(){
    // empty
};

var person = {
    sayName: function() {
        console.log(this.name);
    }
}

console.log(doSomething2.name); // doSomethingElse
console.log(person.sayName.name); // sayName

console.log(doSomething.bind().name); // bound doSomething

console.log((new Function()).name); // anonymous