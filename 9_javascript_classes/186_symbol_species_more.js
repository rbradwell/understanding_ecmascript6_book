class MyClass {
    static get [Symbol.species]() {
        return this;
    }
    constructor(value){
        this.value = value;
    }
    clone() {
        return new this.constructor[Symbol.species](this.value);
    }
}

class MyDerivedClass1 extends MyClass {

}

class MyDerivedClass2 extends MyClass {
    static get [Symbol.species]() {
        return MyClass;
    }
}

let instance1 = new MyDerivedClass1("foo"),
clone1 = instance1.clone(),
instance2 = new MyDerivedClass2("bar"),
clone2 = instance2.clone();

// My MyDerivedClass1 inherits from MyClass and doesn't change the Symbold.species property
// when clone() is called it returns an instance of MyDerivedClass1 because 
// this.constructor[symbol.species] returns MyDerivedClass1 
console.log(clone1 instanceof MyClass); // true
console.log(clone1 instanceof MyDerivedClass1); // true

console.log(clone2 instanceof MyClass); // true
// not an instance of MyDerivedClass2 because when clone() called static getter returnns MyClass.
console.log(clone2 instanceof MyDerivedClass2); // false
