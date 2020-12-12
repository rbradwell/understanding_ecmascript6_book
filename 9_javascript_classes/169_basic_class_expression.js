// classes and functions have two forms:: declarations and expressions.
// here is a class expression
// aside from syntax, class expressions are functionally equivalent to class declarations
let PersonClass = class {

    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}

let person = new PersonClass("Nicholas");
person.sayName(); // Nicholas
console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true
console.log(typeof PersonClass); // function
console.log(typeof PersonClass.prototype.sayName); // function