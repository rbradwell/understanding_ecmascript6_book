/*
P4
If an identifier has arleady been defined in a scope, using the identifier in a let declaration
inside that scope causes an error to be throw
*/

function test1() {
    var count = 30;

    // throws an error
    let count = 40;
        
}

/*
This however doesn't throw an error, because it's a different variable shadowing the original, 
contained in a new scope
*/
function test2() {
    var count = 30;
    if (condition) {
        let count = 40; // doesn't throw an error
        // more code
    }
}