let buffer = new ArrayBuffer(10); // allocate 10 bytes
// create a view over all 10 bytes
let view1 = new DataView(buffer);
// cover bytes qt index 5 and 6 only
view2 = new DataView(buffer, 5, 2);

console.log(view1.buffer === buffer); // true
console.log(view1.byteOffset); // 0
console.log(view1.byteLength); // 10

console.log(view2.buffer === buffer); // true
console.log(view2.byteOffset); // 5
console.log(view2.byteLength); // 2

// p202 - 212 more about these, not covered here