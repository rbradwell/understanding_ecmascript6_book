let colors = ["red", ["green", "lightgreen"], "blue"];

let [firstColor, ...restColors ] = colors;

console.log(firstColor); // red
console.log(restColors.length); // 2
console.log(restColors[0]); [ 'green', 'lightgreen' ]
console.log(restColors[1]); // blue

// ues can use this to clone arrays e.g.

let colors2 = ["red", "green","blue"];

// In ES5
var clonedColorsES5 = colors2.concat();
console.log(clonedColorsES5); // [ 'red', 'green', 'blue' ]

// In ES6
let [ ...clonedColorsES6] = colors2;

console.log(clonedColorsES6); // [ 'red', 'green', 'blue' ]

// NOTE: rest items must be the last entry in the destructured array and cannot be followed by a comma