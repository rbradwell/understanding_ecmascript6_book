// you can pass arguments to iterator through the next method()
// hte value passed to the next() method becomes the value of the yield statement inside the generator.

function *createIterator(){
    let first = yield 1;
    let second = yield first + 2;
    yield second + 3;
}

let iterator = createIterator();

// no arg passed in fierst call therefore yield 1
console.log(iterator.next()); // { value: 1, done: false }
// yield 4 + 2;
console.log(iterator.next(4)); // { value: 6, done: false }
// yield 5 + 3;
console.log(iterator.next(5)); // { value: 8, done: false }
console.log(iterator.next()); // { value: undefined, done: true }