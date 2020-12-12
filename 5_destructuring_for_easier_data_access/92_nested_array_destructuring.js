let colors = ["red", ["green", "lightgreen"], "blue"];

let [firstColor, [ secondColor]] = colors;

let [, [ , thirdColor]] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);