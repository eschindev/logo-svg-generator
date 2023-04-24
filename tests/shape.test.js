const Shape = require('../lib/shape.js');

describe('Shape', () => {
    describe('Instantiate', () => {
        it('should take in a color and text, and create an object of type Shape with those properties', () => {
            const shape = new Shape('red', 'text');

            expect(shape).toBeInstanceOf(Shape);
            expect(shape.color).toEqual('red');
            expect(shape.text).toEqual('text');
        })
    })
})