// In ES5

function setCookie(name, value, options) {
    options = options || {};

    // destructuring has a particularly useful use case when passing function arguments (see 95_destructing_parameters2.js)
    let secure = options.secure, 
        path = options.path,
        domain = options.domain,
        expires = options.expires;
        // code to set the cookie

        console.log(secure); // true
        console.log(domain); // undefined
}

setCookie("type", "js", {
    secure: true,
    expires: 60000
});
