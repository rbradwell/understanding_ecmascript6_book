// sometimes combining values from two iterators into one is useful.
// Generators can delegate to other iterators using a special form of yield with an asterisk (*).

function *createNumberIterator() {
    yield 1;
    yield 2;
}

function *createColorIterator() {
    yield "red";
    yield "green";
}

function *createCombinedIterator() {
    yield *createNumberIterator();
    yield *createColorIterator();
    yield true;
}

var iterator = createCombinedIterator();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 'red', done: false }
console.log(iterator.next()); // { value: 'green', done: false }
console.log(iterator.next()); // { value: true, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.next()); // { value: undefined, done: true }