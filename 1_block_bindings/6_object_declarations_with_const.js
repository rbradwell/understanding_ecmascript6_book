// page 6

const person = {
    name: "Richard"
}

console.log(person)
// mutating the object fields works 
person.name = "Ying" 

console.log(person)

// however trying to change the binding (or pointed) doesn't 
// as in java.

person = {
    name: "Alex"
}