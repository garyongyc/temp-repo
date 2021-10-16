// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file in Node is a module by default
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
