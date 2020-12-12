/**
 * 
 * Because yield stops execution and waits for next() method to be called before starting again,
 * you can implement asynchronous calls without managing callbacks
 * 
 */
function run(taskDef) { // taskDef is a generator function
    // create the iterator. make available elsewhere
    let task = taskDef(); // call the generator to make the iterator
    // start the task i.e. begin the iterator
    let result = task.next();

    // recursive function to keep calling next()
    function step() {
        if (!result.done) {
            result = task.next(); // each call to next() stores return value in result
            step();
        }
    }

    step();
}

run(function*(){ // this is a generator function
    console.log(1);
    yield;
    console.log(2);
    yield;
    console.log(3);
    yield;
});