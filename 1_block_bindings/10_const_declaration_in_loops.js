function f1() {
    var funcs = [];
    for (const i=0;i<10;i++){
        funcs.push(
            function(){
                console.log(i);
            }
        );
    }
}

//f1(); // executes for loop value zero then attempt to modify const produces error

function f2() {
    
    var funcs2 = [],
    object = {
        a: true,
        b: true,
        c: true
    };

    for (const key in object) {
        // if we were to try and change key here i.e within loop we would get an error
        funcs2.push(function(){
            console.log(key);
        });
    }

    funcs.forEach(function(func){
        func();
    });

}

// unlike f1() when const is used in a for-in or for-of loop it behaves simularly to a let
// the only difference is that the variable key cannot change inside the loop
f2() ;