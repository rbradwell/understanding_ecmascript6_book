function *createIterator(){
    let first = yield 1;
    let second = yield first + 2;
    yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next(4)); // { value: 6, done: false }
console.log(iterator.throw(new Error("Boom")));
