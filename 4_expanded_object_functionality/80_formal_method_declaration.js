// prior to ES6 the concerpt of "method" wasn't formally defined.
// ES6 defines method as a function with [[HomeObject]] property e.g.
let person = {
    getGreeting() {
        return "Hello";
    }
};
// above [[HomeObject]] for getGreeting() is person.
// Any reference to super uses the [[HomeObject]]

// prototype is person
let friend = {
    getGreeting() {
        return super.getGreeting() + ", hi!";
    }
};

Object.setPrototypeOf(friend, person);

// The [[HomeObject]] of friend.getGreeting() is friend, and the prototype of friend is person,
// so super.getGreeting() is equivalent to person.getGreeting.call(this)
console.log(friend.getGreeting()); // Hello, hi!