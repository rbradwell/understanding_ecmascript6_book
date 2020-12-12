// generator is a function that returns an iterator

// the * makes it a generator
function *createIterator() {
    yield 1; // yield specifies values the iterator should return when next() id called.  Stop executing after each yield.
    yield 2;
    yield 3;
}

let iterator = createIterator();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3