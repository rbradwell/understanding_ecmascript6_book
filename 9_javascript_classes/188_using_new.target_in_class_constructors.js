// new.target changes depending on how a function is called
class Rectangle {
    constructor(length, width){
        // use in constructor to determine how it is being invoked.
        console.log(new.target === Rectangle); 
        this.length = length;
        this.width = width;
    }
}

// new.target is Rectangle
var obj = new Rectangle(3,4); // output true

class Square extends Rectangle {
    constructor(length){
        super(length, length)
    }
}

// new.target is Square
var obj = new Square(3); // output false - target.new will be Square