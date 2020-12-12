
// this code uses the spread operator inside an array literal to fill in that array with the values from set
let set = new Set([1,2,3,3,3,4,5]), array = [...set];

console.log(array); // [ 1, 2, 3, 4, 5 ]

// another example

// below the spread operator converts maps into an array of arrays

let map = new Map([ ["name", "Nicholas"], ["age",25]]), 
    array2 = [...map];

console.log(array2);

/*
[ 1, 2, 3, 4, 5 ]
[ [ 'name', 'Nicholas' ], [ 'age', 25 ] ]
*/

// use spread operator to create the larger list from the smaller lists
let smallNumbers = [1,2,3],
    bigNumbers = [100,101,102],
    allNumbers = [0, ...smallNumbers, ...bigNumbers];

console.log(allNumbers);
console.log(allNumbers.length);
/*
[
    0,   1,   2, 3,
  100, 101, 102
]
7
*/