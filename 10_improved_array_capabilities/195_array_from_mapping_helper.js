let helper = {
    diff: 1,
    add(value){
        return value + this.diff;
    }
};

function translate() {
    return Array.from(arguments, helper.add, helper);
}

let numbers = translate(1, 2, 3); // [ 2, 3, 4 ]

console.log(numbers);