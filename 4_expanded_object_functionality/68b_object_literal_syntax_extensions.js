// in ES5 object literals can be used as show below
 
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

let test1 = createPerson("Richard", 46);
console.log(test1.age) ;
console.log(test1.name);

// in ES6, the above can be reduced to this

function createPerson2(name, age) {
    return {
        name,
        age
    };
}

let test2 = createPerson("Richard", 46);
console.log(test2.age) ;
console.log(test2.name);
