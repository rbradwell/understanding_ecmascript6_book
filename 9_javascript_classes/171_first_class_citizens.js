// es6 makes classes first class citizens

// you can pass them into functions as arguments
// anonymous class expression passed as argument here
function createObject(classDef) {
    return new classDef();
}

let obj = createObject(class {
    sayHi() {
        console.log("Hi");
    }
});

obj.sayHi(); // Hi

// another use is creating singletons by immediately invoking the class constructor
// this allows creating singletons without leaving a class reference available
let person = new class {

    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

}("Nicholas");

person.sayName(); // Nicholas