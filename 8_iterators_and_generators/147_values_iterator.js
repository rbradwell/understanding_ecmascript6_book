let colors = ["red", "green", "blue"]
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");

for (let entry of colors.values()){
    console.log(entry);
}

for (let entry of tracking.values()){
    console.log(entry);
}

for (let entry of data.values()){
    console.log(entry);
}

/*
red
green
blue
1234
5678
9012
Understanding ECMAScript 6
ebook
*/