var message = "A B C";
// strings can be iterated over, i.e. are iterable in ES6.
// It fully supports unicode therefore if the above characters were asy Japanese characters then these would be printed out.
for (let c of message){
    console.log(c)
}