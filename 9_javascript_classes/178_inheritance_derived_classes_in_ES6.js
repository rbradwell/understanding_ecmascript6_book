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
    // if the following is omitted a default constructor will be created that calls super with all args by default
    constructor(length) {
        super(length, length);
    }
}

var square = new Square(3);

console.log(square.getArea()); // 9
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true