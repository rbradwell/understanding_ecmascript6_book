let PersonClass = class PersonClass2 {

    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}

console.log(typeof PersonClass); // function
// PersonClass2 identifier only exists within the class definition. can be used inside class methods. 
// p171 explains why this is so - not detailed here
console.log(typeof PersonClass2); // undefined

