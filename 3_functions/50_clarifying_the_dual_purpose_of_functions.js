// In ES5 functions were callable with or without new.

// usually a capitalised function name denoted a constructor function.
function Person(name) {
    this.name = name;
}

// so can be called like this to create an object
var person = new Person("Nicholas");

console.log(person); // Person { name: 'Nicholas' }

// if it's called without new, its undefined and sets a name property on global object in strict mode 
var notAPerson = Person("Nicholas");
console.log(notAPerson); // undefined

/* 
Javascript has two internal methods [[Call]] and [[Construct]].
Calling the method without new keyword the [[call]] method is executed, which executes body of code.
Calling the method with new keyword the [[Construct]] method is called.  It is this that is responsible for 
creating the new object, call the instance and then execute body function with 'this' set to the instance.

"Arrow Functions" don't have a [[Construct]] method.

*/
