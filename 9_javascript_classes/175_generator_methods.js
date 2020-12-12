// iterators can be method on class
class MyClass {

    *createIterator() {
        yield 1;
        yield 2;
        yield 3;
    }
}
let instance = new MyClass();
let iterator = instance.createIterator(); // generator method

// defining a default iterator is useful if the class represents a collection of values.
// the default iterator for a class is defined by using Symbol.iterator to define a generator method.

class Collection {
    constructor() {
        this.items = [];
    }
    // use computed namr for generator method that delegates to values() iterator of this.items array.
    // any collect class should define default iterator because required by certain operations.
    *[Symbol.iterator](){
        yield *this.items.values();
    }
}

var collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

// can use instance of Collection directly in for-of loop or with spread operator 
for (let x of collection) {
    console.log(x);
}
// Output:
// 1
// 2
// 3
