// spread operator allows you to specify an array that should be split and passed in as sepearte arguments to a function
// scenario, want to find max value in an array.  Traditionally Math.max() doesn't allow to pass in an array.
// In ES5 would have to search manually or using apply as follows

function test1(){
    let values = [25,50,75,100];
    console.log(Math.max.apply(Math, values));
}

test1();

// in ES6 can use spread operator

function test2() {
    let values = [25,50,75,100];
    console.log(Math.max(...values)); // equivalent to Math.max(25,50,75,100)
}

test2();

// you can mix the spread with other operators also e.g

function test3() {
    let values = [-25,-50,-75,-100];
    console.log(Math.max(...values, 0)); // here we supply the zero, along with the spread so that the minimum value is zero
}

test3();