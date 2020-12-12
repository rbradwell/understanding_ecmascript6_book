let set = new Set([1,2]);

/*
1 1
Set(2) { 1, 2 }
2 2
Set(2) { 1, 2 }
*/
set.forEach(function(value, key, ownerset){
    console.log(key + " " + value);
    console.log(ownerset = set);
});

// the 'this' value can also be passed as the second argument to the callback i.e.

let set2 = new Set([1,2]);

let processor = {
    output(value) {
        console.log(value);
    },
    process(dataSet) {
        dataSet.forEach(function(value){
            this.output("value outputted by this " + value);
        }, this);
    }
};

processor.process(set);

// the same effect can also be achieved using arrow function, therefore 'this' is not required.

let set3 = new Set([1,2]);


let processor2 = {
    output(value) {
        console.log(value);
    },
    process(dataSet) {
        dataSet.forEach(value => this.output("value outputted by this 2 " + value));
    }
};

processor2.process(set3);