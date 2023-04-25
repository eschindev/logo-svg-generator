const Shape = require('./shape.js');

class Square extends Shape {
    constructor(color, text) {
        super(color, text);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect cx="150" cy="100" width="160" height="160" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

</svg>`
    }
}

module.exports = Square;