let numbers = [1, 2, 3, 4];
numbers.fill(1);
console.log(numbers); // [ 1, 1, 1, 1 ]

numbers = [1, 2, 3, 4];

numbers.fill(1,2); 
console.log(numbers); // [ 1, 2, 1, 1 ]

numbers.fill(0,1, 3); 
console.log(numbers); // [ 1, 0, 0, 1 ]
