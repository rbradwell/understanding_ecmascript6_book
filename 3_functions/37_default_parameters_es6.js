// es6 supports providing default values for parameters
function makeRequest(url, timeout = 2000, callback = function(){}){
    // ...
}

// use default timeout and callback
makeRequest("/foo");

// uses default callback 
makeRequest("/foo", 500);

// don't use any defaults
makeRequest("/foo", 500, function(){ 
    console.log("do something!")
});

// NOTE: url is always required here.

// below arg with default is in middle but got to provide undefined for it if