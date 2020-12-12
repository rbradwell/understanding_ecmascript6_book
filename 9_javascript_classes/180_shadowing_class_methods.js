class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
    // override and shadow Rectangle.prototype.getArea()
    getArea() {
        return this.length * this.length;
    }
}

var square = new Square(4);
console.log(square.getArea()); // 16