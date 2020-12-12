let set = new Set([1, 2, 3, 3, 3, 4, 5]),
    array = [ ...set]; // using the spread operator

console.log(array); // [ 1, 2, 3, 4, 5 ]

// this technique is useful when have an array and want to create a new array from it without duplicates

function eliminateDuplicates(items) {
    return [...new Set(items)];
}

let numbers = [1, 2, 3, 3, 3, 4, 5],
    noDuplicates = eliminateDuplicates(numbers);

console.log(noDuplicates); // [ 1, 2, 3, 4, 5 ]