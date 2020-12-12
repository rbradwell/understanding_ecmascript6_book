// changing on Object's Prototype
// In ES5 object either created by constructor or Object.create()
// Objects prototpye remains unchanged after instantiation
// ES5 had Object.getPrototypeOf() to retrieve prototype of given object
// ES6 allows Object.setPrototypeOf() to change object prototype.

let person = {
    getGreeting() {
        return "Hello";
    }
}

let dog = {
    getGreeting() {
        return "Woof";
    }
}

// prototype is person i.e. friend first inherits from person i.e. getGreeting() returns hello
let friend = Object.create(person);
console.log(friend.getGreeting()); // hello
console.log(Object.getPrototypeOf(friend) === person); // true

// set prototype to dog i.e. freind inherits from dog. getGreeting() returns woof
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()) // woof
console.log(Object.getPrototypeOf(friend) === dog); true

// The value of an objects prototype is stored in internal only property [[Prototype]]
// The above methods are the only ways to work with it.