function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
}

function getBase() {
    return Rectangle;
}
// call the method above to dynamically determine class to inherit from
class Square extends getBase() {
    constructor(length) {
        super(length, length);
    }
}

var x = new Square(3);
console.log(x.getArea()); // 9 
console.log(x instanceof Rectangle); // true