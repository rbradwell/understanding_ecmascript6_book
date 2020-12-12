let map = new WeakMap(),
element = document.querySelector(".element");

map.set(element, "original");

let value = map.get(element);

console.log(value); // original

// reomve the element
element.parentNode.removeChild(element);
element = null;

// the weak map is empty at this point because the reference was nulled.