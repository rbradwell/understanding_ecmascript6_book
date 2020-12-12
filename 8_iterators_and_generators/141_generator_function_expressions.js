let createIterator = function *createIterator(items) {
    for (let i=0;i<items.length; i++) {
        yield items[i];
    }
}

let iterator = createIterator([1,2,3]);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

console.log(iterator.next()); // { value: undefined, done: true }