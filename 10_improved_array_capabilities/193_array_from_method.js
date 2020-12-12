// In ES5 you would write a method something like below to convert array like object into array.
function makeArray(arrayLike) {
    var result = [];
    for (var i=0, len = arrayLike.length; i<len;i++) {
        result.push(arrayLike[i]);
    }
}

// the same can be written in less code using slice

function makeArray2(arrayLike){
    return Array.prototype.slice.call(arrayLike);
}

// ES6 provides a better way, given an iterable or an array-like object the Array.form() method returns 
//an array. e.g.

function translate() {
    return Array.from(arguments, (value) => value + 1);
}

let numbers = translate(1, 2, 3);

console.log(numbers); // [ 2, 3, 4 ]