// page 9

function func1(){
    var funcs = [];

    for (let i=0;i<10;i++) {
        funcs.push(function(){
            console.log(i);
        });
    }
    
    funcs.forEach(function(func){
        func();
    }) ;    
}

// Because of the let, rather than var, the output of this one
// is the same as the immediately invoked function expression (IIFE)
// (see 8) i.e. it creates a new i variable for each loop, unlike
// using var
func1();

function func2(){
    var funcs2 = [],
        object = {
            a:true,
            b:true,
            c:true
        };

    for (let key in object) {
        funcs2.push(function(){
            console.log(key);
        });
    }

    funcs2.forEach(function(func){
        func(); 
    });
}

// the same behaviour is shown when using the for loop.
func2();
