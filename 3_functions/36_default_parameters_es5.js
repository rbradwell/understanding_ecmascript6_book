// any number of parameters can be passed regardless of number in function definition
// argas timeout and callback are optional.  The logical OR pattern provides a default if the args aren't provided. 
// i.e. they are undefined.
function makeRequest(url, timeout, callback) {
    timeout = timeout || 2000;
    callback = callback || function(){};
    // ...
}
// one problem with this pattern is that doesn't allow zero for timeout because zero is falsy therefore picks up default.
// safer alternative below

function makeRequest2(url, timeout, callback) {
    timeout = (typeof timeout !== "undefined") ? timeout : 2000;
    callback = (typeof callback !== "undefined") ? callback : function(){};
    // ...
}