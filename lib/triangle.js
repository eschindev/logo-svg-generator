const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(color, text) {
        super(color, text);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="58,180 242,180 150,20" fill="${this.color}" />

  <text x="150" y="150" font-size="40" text-anchor="middle" fill="white">${this.text}</text>

</svg>`
    }
}

module.exports = Triangle;