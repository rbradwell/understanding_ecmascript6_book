let numbers = [1,2,3,4];
// paste values into array starting at index 2
// copy values from array starting at index 0
numbers.copyWithin(2,0);

console.log(numbers.toString()); // 1,2,1,2

numbers = [1,2,3,4];

// paste values into array starting at index 2
// copy values from array starting at index 0
// stop copying at index 1
numbers.copyWithin(2,0,1);

console.log(numbers.toString()); // 1,2,1,4
