// p69-70
// ES6 sees improved syntax for assigning methods to objects

// in ES5 ...

var person = {
    name : "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

person.sayName() ;
// in ES6 the colon and function keyword may be eliminated e.g.

var person2 = {
    name : "Nicholas",
    sayName() {
        console.log(this.name);
    }
};

person2.sayName() ;

// The only difference is that the ES6 consise method can use super but ES5 version cannot

