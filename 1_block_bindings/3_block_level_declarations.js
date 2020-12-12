/*
Page 3
The let provides block or lexical scope. i.e. the variable is only available inside
the block declaration.  If the let was replaced by var then the value variable would be
hoisted to the top of the function and would be accessible in the else block, but however 
would be underfined.
using let doesn't hoist the function.

*/

function getValue(condition){
    if (condition){
        let value = "blue";
        // other code
        return value;
    } else {
        // value doesn't exit here
    }
    // value doesn't exist here
}