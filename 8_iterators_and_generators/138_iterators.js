// how to write an iterator in IE5

function createIterator(items){
    var i =0 ;

    return {
        next: function() {
            var done = (i >= items.length)
            var value = !done ? items[i++] : undefined;
            return {
                done: done,
                value: value    
            };
        }    
    };
    
}

// how the iterator works
var iterator = createIterator([1,2,3]);

console.log(iterator.next()); // { done: false, value: 1 }
console.log(iterator.next()); // { done: false, value: 2 }
console.log(iterator.next()); // { done: false, value: 3 }
console.log(iterator.next()); // { done: true, value: undefined }

// for all other calls
console.log(iterator.next()); // { done: true, value: undefined }
