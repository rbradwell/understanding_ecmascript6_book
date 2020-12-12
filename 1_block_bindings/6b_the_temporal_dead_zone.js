/**
 * Page 6-7
 * 
 * Javascript looks forward and either hoists varaiables assigned with var
 * or puts const/let in the temporal dead zone
 */
function test1() {
    if (condition) {
        console.log(typeof value); // throws an error because value in temporal dead zone but only safe to use 
        // afer declaration below
        let value = "blue";
    }
}

function test2() {

    console.log(typeof value); // value is undefined because referenced outside block i.e. not in temporal dead zone
    // Temporal Dead Zone
    if (condition) {
        let value = "blue";
    }
}