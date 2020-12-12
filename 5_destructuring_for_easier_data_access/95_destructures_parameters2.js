// In ES6

// like 94_destructed_parameters.js
// same thing using ES6 destructuring i.e. destructured parameters
function setCookie2(name2, value2, { secure2, path2, domain2, expires2 } ) {
    console.log(secure2); // true
    console.log(domain2); // undefined
};

setCookie2("type", "js", {
    secure2: true,
    expires2: 80000
});

// NOTE: one quirk of destructured parameters is that they are required
// if we were to do this it woud throw an error


//setCookie2("type", "js"); // throws an error because of missing parameter

// you can work around the issue by providing a default value for the destructured parameter, like this

function setCookie2(name, value, { secure, path, domain, expires } = {}) {
    //
}

// you can specify destructured default values for the destructured parameters
// evey property in the destructured parameter has a default value
function setCookie3(name, value, { secure = false, path = "/", domain="example.com", expires = new Date(Date.now() + 3600000000)} = {}) {
    //
}