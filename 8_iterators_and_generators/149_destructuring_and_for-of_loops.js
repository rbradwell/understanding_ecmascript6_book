let data = new Map();

data.set("title", "understanding ECMAScript 6");
data.set("format", "ebook");

// using the for-of loop in code used a destructured array to assign key acnd value for each entry in map
for (let [key, value] of data) {
    console.log(key + "=" + value);
}