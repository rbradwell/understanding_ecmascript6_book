let methodName = "sayName";

class PersonClass {
  
    constructor(name) {
        this.name = name;
    }

    [methodName]() {
        console.log(this.name);
    }
};
let me = new PersonClass("Nicholas");
me.sayName(); // Nicholas

// accessor properties can use computed names also

let propertyName = "html";

class CustomHTMLElement {

    constructor(element) {
        this.element = element;
    }

    get [propertyName]() {
        return this.element.innerHTML;
    }

    set [propertyName](value) {
        this.element.innerHTML = value;
    }
}
