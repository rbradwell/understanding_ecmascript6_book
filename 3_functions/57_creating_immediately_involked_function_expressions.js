// p57
/* Immediately involked function expressions (IIFEs) allow you to define an anonymous function and call it immediately 
without saving a reference.  This is useful to create a scope that is shielded from the rest of a program i.e. private
*/

let person = function(name) {
    return {
        getName: function(){
            return name;
        }
    }
}("Nicholas");

console.log(person.getName()); // Nicholas

// rewriting with arrow functions ...

let person2 = ((name) => {
    return {
        getName:function() {
            return name;
        }
    }
})("Nicholas2");

console.log(person2.getName()); // Nicholas
