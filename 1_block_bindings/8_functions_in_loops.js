// Page 8

function f1() {
    var funcs = [];

    for (var i=0;i<10;i++){
        funcs.push(function(){
            console.log(i);
        });
    }
    
    funcs.forEach(function(func){
        func(); // outputs the numbers "10" ten times
    });  
}

function f2(){
    var funcs2 = [];

    for (var j=0;j<10;j++){
        funcs2.push(
        (function(value) {
            return function() {
                console.log(value);
            }
        }
        )(j)); // immediately involked function expression (IIFEs) force a new copy of variable insude loop
    }

    funcs2.forEach(function(func){
        func();
    });  
}

// the variable i is shared across the loops so 10 is printed each time
f1();
// the variable i is new for each loop
f2();