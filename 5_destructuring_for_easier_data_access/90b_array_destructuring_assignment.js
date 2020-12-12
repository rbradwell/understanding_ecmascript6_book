let colors = ["red", "green", "blue"],
    firstColor = "black",
    secondColor="purple";

[firstColor, secondColor] = colors;

// the already defined variables values are overwritten
console.log(firstColor); // red
console.log(secondColor); // green

// swapping variables is easier in ES6

let a=1, b=2;

[a,b] = [b,a];

console.log(a); // 2
console.log(b); // 1

// default values can be used in destructuring assignment when a property at a given position doesn't exist or is undefined

let colors2 = ["red"];

let [firstColor2, secondColor2 = "green"] = colors2;

console.log(firstColor2); // red
console.log(secondColor2); // green