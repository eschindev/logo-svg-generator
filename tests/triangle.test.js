const Triangle = require('../lib/triangle.js');

describe('Square', () => {
    describe('Instantiate', () => {
        it('should take in a color and text, and create an object of type Triangle with those properties', () => {
            const triangle = new Triangle('red', 'text');

            expect(triangle).toBeInstanceOf(Triangle);
            expect(triangle.color).toEqual('red');
            expect(triangle.text).toEqual('text');
        })
    });

    describe('render()', () => {
        it('should, after instantiating a Triangle object, create the content of an SVG file that would render a triangle containing the requested text', () => {
            const triangle = new Triangle('red', 'text');

            let expectedOutput = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="58,180 242,180 150,20" fill="red" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">text</text>

</svg>`;
            let renderOutput = triangle.render();
            console.log(expectedOutput);
            console.log(renderOutput);

            expect(renderOutput).toEqual(expectedOutput);
        })
    });
})