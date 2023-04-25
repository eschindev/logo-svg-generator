const Square = require('../lib/square.js');

describe('Square', () => {
    describe('Instantiate', () => {
        it('should take in a color and text, and create an object of type Square with those properties', () => {
            const square = new Square('red', 'text');

            expect(square).toBeInstanceOf(Square);
            expect(square.color).toEqual('red');
            expect(square.text).toEqual('text');
        })
    });

    describe('render()', () => {
        it('should, after instantiating a square object, create the content of an SVG file that would render a square containing the requested text', () => {
            const square = new Square('red', 'text');

            let expectedOutput = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="70" y="20" width="160" height="160" fill="red" />

  <text x="150" y="115" font-size="60" text-anchor="middle" fill="white">text</text>

</svg>`;
            let renderOutput = square.render();

            expect(renderOutput).toEqual(expectedOutput);
        })
    });
})