// an iterable is an object with a Symbol.iteraot property
// The Symbol.iterator symbol specifies a function that returns an iterator for the give object.
// all collections is ES6 i.e. arrays, sets, maps are iterables in ES6 so they have a default iterator specified.
// Iterables can be used with the for-of loop.
// NOTE: all iterators created by generators are also iterables, because generators assign the Symbol.iterator property by default.

// the for-of loop calls next() on an iterable each time the loop executes

let values = [1,2,3];

for (let num of values){
    console.log(num);
}

// the for-of loop calls the Symbol.iterator moeth on the values array to retrieve an iterator.
// then iterator.next() is called.

// for-of statement will thorw an error if used on a none-iterable obejct