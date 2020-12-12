function PersonType(name){
    this.name = name;
}

// static method
// doesn't depend on an instance of PersonType for its data
PersonType.create = function(name) {
    return new PersonType(name);
}

// instance method
PersonType.prototype.sayName = function() {
    console.log(this.name);
}

var person = PersonType.create("Nicholas");

person.sayName(); // Nicholas

// ES6 introduces static annotation before the method or accessor name
// Here is the equivalent of example above

class PersonClass {
    constructor(name) {
        this.name = name;
    }

    // equivalent of PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
    // eqivalent of PersonType.create
    static create(name) {
        return new PersonClass(name);
    }
}

var person2 = PersonClass.create("Nicholas");

person2.sayName(); // Nicholas

// static members are not accessible from instances.  Always access static members from class directly
