let colors = ["red", "green", "blue"];

let [firstColor, secondColor] = colors;

console.log(firstColor) ; // red
console.log(secondColor) ; // green

// you can also omit items in the destructuring pattern and only provide variable names for the itens you're interested in.

let [,,thirdColor] = colors;

console.log(thirdColor); // blue