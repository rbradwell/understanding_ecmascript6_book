// in ES5 - use square brackets to compute propery names

var person = {},
    lastName = "last name";

person["first name"] = "Nicholas";
person[lastName] = "Zakas";

console.log(person["first name"]) ;
console.log(person[lastName]) ;

// in ES6

let lastName2 = "last name2";

let person2 = {
    "first name2" : "Richard",
    [lastName2] : "Bradwell"
};

console.log(person2["first name2"]);
console.log(person2[lastName2]);

// you can also include expressions to compute string

var suffix = " name3 ";

var person3 = {
    ["first" + suffix]: "Richard2",
    ["last" + suffix]: "Bradwell2"
};

console.log(person3["first name3 "]);
console.log(person3["last name3 "]);