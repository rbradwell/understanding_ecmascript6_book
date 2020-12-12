// bottom of page 50 - 51
// page 50 outlined how a function could be called in dual ways.

// in ES5 can determine if a function was called with new, i.e. as a constructor, via

function Person(name) {
    if (this instanceof Person) {
        this.name = name;
    } else {
        throw new Error("You must use new with person");
    }
}

// this works because the [[Construct]] method creates a new instance of Person and assigns it to 'this'
var person = new Person("Nicholas"); 

try{
    var person = Person("Nicholas"); // this throws an error
} catch (e){
    console.log("Oops not a person");
}

// you can trick the above however by using call to assign Person to this
var notAPerson2 = Person.call(person, "Michael") ; // this works

// ES6 introduces the new.target metaproperty to solve the problem of identifying if function was called with new

function Person2(name) {
    if (typeof new.target !== "undefined") {
        this.name = name;
    } else {
        throw new Error("You must use new with Person");
    }
}

var person2 = new Person2("Nicholas"); // this works
try {
    var notAPerson2 = Person2("Nicholas"); // this throws exception
} catch (e) {
    console.log("Oops not a person2");
}
