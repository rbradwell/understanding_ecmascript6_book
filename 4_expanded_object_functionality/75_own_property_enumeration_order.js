// ES5 didn't define the enumeration order of the object properties.
// ES6 defines the order in which own properties must be returned when enumerated.
// this effects how properties are returned using Object.getOwnPropertyNames() and Reflect.ownKeys().
// It also affects the order in which properties are processed by Object.assign()

// order is 1. All numberic keys asc, 2. all keys in order added to object, 3. all symbol keys in order added to object
// e.g.

var obj = {
    a:1,
    0:1,
    c:1,
    2:1,
    b:1,
    1:1
};

obj.d = 1;

console.log(Object.getOwnPropertyNames(obj).join("")); // 012acbd

// the for-in loop is still unspecified enum order as is Object.keys() and JSON.stringify()
