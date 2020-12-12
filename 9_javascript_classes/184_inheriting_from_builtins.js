// built in array behaviour
var colors = [];
colors[0] = "red";
console.log(colors.length); // 1

colors.length = 0;
console.log(colors[0]); // underfined

// trying to inherit from array in ES5 doesn't work

function MyArray() {
    Array.apply(this,arguments);
}

MyArray.prototype = Object.create(Array.prototype, {
    constructor: {
        value: MyArray,
        writable: true,
        configurable: true,
        enumerable:true
    }
});

var colors = new MyArray();
colors[0] = "red";
console.log(colors.length); // 0 - NOTE: This is wrong!

colors.length = 0;
console.log(colors[0]); // red

/*
 Note: above the length is wrong because it is neither covered by Array.apply() or assigning the prototype. 
 The above doesn't work because in ES5 the value is first created by the derived type (MyArray) and then
 the base type constructor is called (like Array.apply()).  'This' starts out as an instance of MyArray and
 is then decorated with additional properties from Array. 
 */

 /*
 In ES6 (below) class based inheritance, the value of 'this' is first created by the base (Array) and then
 modified by the derived class constructor (MyArray). 
 */

 class MyArray2 extends Array {

 }

 var colors2 = new MyArray2();
 colors2[0] = "red";
 console.log(colors2.length);

 colors2.length = 0; // 1 - works correctly
 console.log(colors2[0]); // undefined

 // MyArray2 inherits directly from Array and therefore works like array.  ES6 goal was to allow inhritence 
 // from all built in types.