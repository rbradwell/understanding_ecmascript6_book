import {  color } from './284_basic_exporting.js'; // import single binding
import {  name, magicNumber } from './284_basic_exporting.js'; // import multiple bindings

import * as example from './284_basic_exporting.js'; // import all
// NOTE: regardless the no of times a modules is imported it only runs once

console.log(color);

color = 8; // error - can't reassign bindings

console.log(example.color);