// P13 - 19

// before ecmaScript6, Javascript strings assumed 16-bit sequences (code unit) per character.

// UTF-16 
// first 2^16 - Basic Multilingual Plane (BMP).
// everything after this supplementary planes that can't be representewd in 16 bits
// sorted using two 16-bit code units to represent single code point.
// i.e. a character is either a single code unit (16 bits) or 2 units of 32 bits.

// ECMAScript 5 couldn't cope with say Japanese char because thought it's length was 2 etc. i.e. all functions use 16 bit

let text = "(some foreign character here)"
console.log(text.charCodeAt(0)); // accept a code unit position and return integer value

// NOTE: Didn't complete the pages above because it's as dull as dishwater