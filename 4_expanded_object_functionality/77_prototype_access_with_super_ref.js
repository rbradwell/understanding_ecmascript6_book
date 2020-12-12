// ES6 introduces super references.

// IN ES5 to override a method on an object instance so it calls the prototype method of the same name

let person = {
    getGreeting() {
        return "hello";
    }
}

let dog = {
    getGreeting() {
        return "woof";
    }
}

let friend = {
    getGreeting() {
        // calling the method on the prototype i.e. doing a super
        return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
    }
}

// set prototype to person
Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting()); // hello, hi!
console.log(Object.getPrototypeOf(friend) === person); // true

// set prototype to dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()); // woof, hi!
console.log(Object.getPrototypeOf(friend) === dog); // truw

// ES6 introduces super.
// super is a pointer to the current obejct's prototype i.e. effectively Object.getPrototypeOf(this)
// so rewrite like this

let friend2 = {
    getGreeting() {
        // calling the method on the prototype i.e. doing a super
        //return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
        return super.getGreeting() + ", hi!";
    }
}

Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting()); // hello, hi!

// any method on an object's prototype can be called using the super reference.
// the super reference works for multiple inheritence where Object.getPrototypeOf() no longer works in all circumstances (More details on page 79)
