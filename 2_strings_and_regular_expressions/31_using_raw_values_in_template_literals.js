let message1 = `Multiline\nstring`,
    message2 = String.raw`Multiline\nstring`;

console.log(message1); 
console.log(message2); // Multiline\nstring

// raw gives back string before character escapes are transformed