// p58 - 61

/**
 * 
 * 
 */
let pageHandler = {
    id: "123456",
    init:function() {
        document.addEventListener("click", function(event){
            this.doSomething(event.type); // error
        }, false);
    },
    doSomething: function(type) {
        console.log("Handling " + type + " for " + this.id);
    }
}

// on line 11, 'this' references the object that was the target of the event i.e.  document instead of pageHandler.

// To fix the issue the 'this' could be explicitly bound to the function instead

let pageHandler2 = {
    id: "123456",
    init:function() {
        document.addEventListener("click", (function(event){
            this.doSomething(event.type); // error
        }).bind(this), false);
    },
    doSomething: function(type) {
        console.log("Handling " + type + " for " + this.id);
    }
}

// a better way to fix this is via the arrow function

let pageHandler3 = {
    id: "123456",
    init:function() {
        document.addEventListener("click", event => this.doSomething(event.type), false); // value of this same as in init
    },
    doSomething: function(type) {
        console.log("Handling " + type + " for " + this.id);
    }
}

// NOTE: arrow fns have no this binding
// value of this inside arrow function can only be determined by lookup up the scope chain.
// if the arrow fn is contained within a non-arrow function it will share containing functions 'this',
// otherwise equivalent to this in global scope.

// arrow fns can't be used to define types.  They have no prototype property.  Has no [[construct]] behaviour
// trying to use now throws error e.g.

var MyType = () => {},
    object = new MyType(); // error - can't use new

// the value of this can't be changed using call(), apply(), bind()


