let colors = ["red", "green", "blue"]
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");

for (let entry of colors.keys()){
    console.log(entry);
}

for (let entry of tracking.keys()){
    console.log(entry);
}

for (let entry of data.keys()){
    console.log(entry);
}

/*
0
1
2
1234
5678
9012
title
format
*/