/*
each type of colloection type has a default iterator that is used by for-of
*/

let colors = ["red", "green", "blue"]
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set("title", "Understanding Ecmascript 6");
data.set("format", "print");

for (let value of colors) { // same as using values.values()
    console.log(value);
}

for (let num of tracking) { // same as using num.values()
    console.log(num);
}

for (let entry of data) { // same as using data.entries()
    console.log(entry);
}
/*
red
green
blue
1234
5678
9012
[ 'title', 'Understanding Ecmascript 6' ]
[ 'format', 'print' ]
*/