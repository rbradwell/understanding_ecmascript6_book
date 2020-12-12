class PersonClass {
    constructor(name) {
        this.name = name;
    }

    sayName(){
        console.log(this.name);
    }    
}
let person = new PersonClass("Nicholas");
person.sayName();

console.log(person instanceof PersonClass);
console.log(person instanceof Object); 

console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName);

// class declarations are just syntactical sugar on top of exising custom type declarations
// The PersonClass declaration actually creates a function that has the behaviour of the constructor method,
// which is why typeof PersonClass gives "function" as the result.
// The say method also ends up as a method on PersonClass.prototype.
// NOTE: class prototypes are read only.