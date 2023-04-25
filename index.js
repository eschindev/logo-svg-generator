const inq = require('inquirer');
const { writeFile } = require('fs/promises');

const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

// const cir = new Circle("green", "ABC");

// console.log(cir.render());