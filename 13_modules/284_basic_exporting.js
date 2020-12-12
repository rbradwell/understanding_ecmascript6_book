/* 
features of modules
- code automatically runs in strict mode
- variables create in top level of module aren't automatically added to the shared global scope
- module must export things
- the value of 'this' in top level of module is undefined
- you can't export anonymous functions or classes without using default keyword
*/
// export data
export var color = "red";
export let name = "Nicholas";
export const magicNumber = 7;

// export function
export function sum(num1, num2){
    return num1 + num2;
}

// export class
export class Rectangle {
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
}

// this function is private to the module
function subtract(num1, num2){
    return num1 - num2;
}
