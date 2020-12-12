// passthru is tag
function passthru(literals, ...substitutions) {
    let result = "";
    // run the loop only for the substitution count
    for (let i=0;i<substitutions.length;i++) {
        result += literals[i];
        result += substitutions[i];
    }
    // add the last literal
    result += literals[literals.length-1];
    return result;
}

let count = 10,
    price=0.25,
    message = passthru`${count} items cost $${(count*price).toFixed(2)}.`;

console.log(message);

// the literals are Array(3)["", " items cost $", "."]
// substitutions Array(2)[10, "2.50"]