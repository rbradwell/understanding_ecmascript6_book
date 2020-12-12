// Array is built in type
// inheriting from buit-ins with method that returns an instance, 
//will return an instance of the derived class
// It is Symbol.species property, behind the schemes, making this change
class MyArray extends Array {
    
}

let items = new MyArray(1,2,3,4),
subitems = items.slice(1,3);

// the slice method is inherited from Array but returns an instance of MyArray
console.log(items instanceof MyArray); // true
console.log(subitems instanceof MyArray); // true

/*
Symbol.species is a symbol used to define a static accessor property that returns a function.
That function is a constructor to use whenever an instance of the class must be craeted inside an 
instance method (instead of using the constructor)
*/


class MyArray2 extends Array {
    // specify the class to use for methods that return an array
    static get [Symbol.species](){
        return Array;
    }
}

let items2 = new MyArray2(1,2,3,4),
subitems2 = items2.slice(1,3);

console.log(items2 instanceof MyArray2); // true
console.log(subitems2 instanceof Array); // true
console.log(subitems2 instanceof MyArray2); // false
