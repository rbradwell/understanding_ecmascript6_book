// TODO - p162 - 164 CAN'T UNDERSTAND NEED TO REREAD!

function run(taskDef) {
    // create the iterator. make available elsewhere
    let task = taskDef(); // call the generator to make the iterator
    // start the task i.e. begin the iterator
    let result = task.next();

// recursive function to keep calling next()
function step() {
    // if the's more to do
    if (!result.done) {
        if (typeof result.value === "function") {
            result.value(function(err, data){
                if (err) {
                    result = task.throw(err);
                    return;
                }
                result = task.next(data);
                step();
            });
        } else {
            result = task.next(result.value);
            step();
        }
    }
}

step();

}