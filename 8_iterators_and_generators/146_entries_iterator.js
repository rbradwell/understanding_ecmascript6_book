let colors = ["red", "green", "blue"]
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");

for (let entry of colors.entries()){
    console.log(entry);
}

for (let entry of tracking.entries()){
    console.log(entry);
}

for (let entry of data.entries()){
    console.log(entry);
}

/*
[ 0, 'red' ]
[ 1, 'green' ]
[ 2, 'blue' ]
[ 1234, 1234 ]
[ 5678, 5678 ]
[ 9012, 9012 ]
[ 'title', 'Understanding ECMAScript 6' ]
[ 'format', 'ebook' ]
*/