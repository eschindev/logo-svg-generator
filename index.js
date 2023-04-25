const inq = require('inquirer');
const fs = require("fs");

const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

function init() {
    inq
        .prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like your logo to be?',
                choices: ['circle', 'square', 'triangle']
            },
            {
                type: 'input',
                name: 'color',
                message: 'What color would you like your logo to be?',
                validate: function (input) { 
                return input.length > 0
                }
            },
            {
                type: 'input',
                name: 'text',
                message: 'What text would you like displayed on your logo?',
                validate: function (input) { 
                return input.length > 0
                }
            }
        ])
        .then((data) => {
            const {shape, color, text} = data;
            let logo;
            switch (shape) {
                case 'circle':
                    logo = new Circle(color, text);
                    break;
                case 'square':
                    logo = new Square(color, text);
                    break;
                case 'triangle':
                    logo = new Triangle(color, text);
                    break;
            }
            const fileName = `./examples/logo${Date.now()}.svg`;
            const content = logo.render();
            fs.writeFile(fileName, content, (err) => err ? console.log(err) : console.log('Success!'));
        })
}

init();