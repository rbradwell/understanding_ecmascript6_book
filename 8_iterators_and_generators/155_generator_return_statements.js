function *createIterator() {
    yield 1;
    return; // return indicates that all processing is done.  done property set to true.
    yield 2;
    yield 3;
}

let iterator = createIterator();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

console.log(iterator.next()); // { value: undefined, done: true }

function *createIterator2() {
    yield 1;
    return 42;
}

// you can also specify in the return the value when the iterator is done
let iterator2 = createIterator2();

console.log(iterator2.next()); // { value: 1, done: false }
console.log(iterator2.next()); // { value: 42, done: true }

console.log(iterator2.next()); // { value: undefined, done: true }

// NOTE: the spread operator and for-of ignore any value specified by a return statement.  
// As soon as they see done is true, they stop without reading the value.