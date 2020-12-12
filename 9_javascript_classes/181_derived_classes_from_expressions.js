/*
Rectangle is an ES5 style constructor.
Because Rectangle has [[Construct]] and a prototype the square class can still inherit from it.
*/
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

var x = new Square(3);
console.log(x.getArea()); // 9 
console.log(x instanceof Rectangle); // true