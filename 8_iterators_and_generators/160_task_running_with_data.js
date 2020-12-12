function run(taskDef) {
        // create the iterator. make available elsewhere
        let task = taskDef(); // call the generator to make the iterator
        // start the task i.e. begin the iterator
        let result = task.next();

    // recursive function to keep calling next()
    function step() {
        // if the's more to do
        if (!result.done) {
            result = task.next(result.value); 
            step();
        }
    }

    step();

}

// now that the result.value is passed to next() as an argument, it's possible to pas data between yield calls like this

run(function*(){
    let value = yield 1;
    console.log(value); // 1

    value = yield value +3;
    console.log(value); // 4
});