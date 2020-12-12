let buffer = new ArrayBuffer(10); // allocate 10 bytes
console.log(buffer.byteLength); // 10

let buffer2 = buffer.slice(4,6);
console.log(buffer2.byteLength); // 2
