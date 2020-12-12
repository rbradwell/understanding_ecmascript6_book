
// generators can be added to objects too
let o = {

    createIterator: function *createIterator(items) {
        for (let i=0;i<items.length; i++) {
            yield items[i];
        }
    }

};

let iterator = o.createIterator([1,2,3]);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }

// can also use ES6 method shorthand

let o2 = {

    createIterator: function *createIterator(items) {
        for (let i=0;i<items.length; i++) {
            yield items[i];
        }
    }

};

let iterator2 = o2.createIterator([1,2,3]);

console.log(iterator2.next()); // { value: 1, done: false }
console.log(iterator2.next()); // { value: 2, done: false }
console.log(iterator2.next()); // { value: 3, done: false }
