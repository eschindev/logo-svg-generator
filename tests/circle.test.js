const Circle = require('../lib/circle.js');

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should take in a color and text, and create an object of type Circle with those properties', () => {
            const circle = new Circle('red', 'text');

            expect(circle).toBeInstanceOf(Circle);
            expect(circle.color).toEqual('red');
            expect(circle.text).toEqual('text');
        })
    });

    describe('render()', () => {
        it('should, after instantiating a circle object, create the content of an SVG file that would render a circle containing the requested text', () => {
            const circle = new Circle('red', 'text');

            let expectedOutput = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="red" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">text</text>

</svg>`;
            let renderOutput = circle.render();
            console.log(expectedOutput);
            console.log(renderOutput);

            expect(renderOutput).toEqual(expectedOutput);
        })
    });
})