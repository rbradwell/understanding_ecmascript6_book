/** 
Mixins are a pattern for object composition.  One object receives properties and methods from another object
A typical mixin method is like below
**/
function mixin(receiver, supplier) {
    Object.keys(supplier).forEach(
        function(key) {
            receiver[key] = supplier[key]
        }
    );
    return receiver;
}

// this is how it would be used

function EventTarget() { /* ... */ }
EventTarget.prototype = {
    constructor: EventTarget,
    emit: function() { /* ... */ },
    on: { /* ... */ }
};

var myObject= {};
mixin(myObject, EventTarget.prototype);
// my object receives behavior from the EventTarget.prototype object, giving the object emit() and on() methods
myObject.emit("somethingChanged");

// The equivalent way to do this in ES6 is to use Object.assign()

var myObject2 = {};
Object.assign(myObject2, EventTarget.prototype) // copy all the enumerable own properties. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
myObject2.emit("somethingChanged");
// NOTE: Object assign can atake any number of suppliers eg.

var receiver = {};
Object.assign(receiver,
{
    type: "js",
    name: "file.js"
},
{
    type: "css"
}
);

console.log(receiver.type); // "css"
console.log(receiver.name); // file.js

// Object assign doesn't craete accessor properties on the reciever when a supplier has access properties
// Because Object.assign() uses the assignment operator, an accessor property on a supplier will become
// a data property on the receiver e.g.

var receiver = {},
supplier = {
    get name() {
        return "file.js"
    }
};

Object.assign(receiver, supplier);

var descriptor = Object.getOwnPropertyDescriptor(receiver, "name");
console.log(descriptor.value); // "file.js"
// the supplier has accessor property called name. Assign called get name() and it supplied "file.js".  Now the receiver has name with value "file.js"
console.log(descriptor.get); // undefined
