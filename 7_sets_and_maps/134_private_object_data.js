// in ES5 the immediately involked function expression (IIFE) is used to facilitate private data

var Person = (function(){
    var privateData = {}, privateId = 0;

    function Person(name){
        Object.defineProperty(this, "_id", { value: privateId ++ });

        privateData[this._id] = {
            name: name
        };
    }

    Person.prototype.getName = function() {
        return privateData[this._id].name;
    };

    return Person;
}());

console.log(new Person("richard").getName());

// in ES6 - weak maps can be used for this

let Person2 = (function(){
    let privateData = new WeakMap();

    function Person2(name) {
        privateData.set(this, { name : name});
    }

    Person2.prototype.getName = function() {
        return privateData.get(this).name;
    };

    return Person2;   
}());


console.log(new Person2("richardb").getName());
