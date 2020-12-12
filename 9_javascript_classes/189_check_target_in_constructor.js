// abstract base class
// checks new.target to make sure can't be directly instantiated
class Shape {
    constructor(){
        if (new.target === Shape){
            throw new Error("This class cannot be instantiated directly.");
        }
    }
}

class Rectangle extends Shape {
    constructor(length, width){
        super();
        this.length = length;
        this.width = width;
    }
}

var y = new Rectangle(3,4);
var x = new Shape(); // throws an error

console.log(y instanceof Shape);
