class Shape {
    constructor(color, text = "") {
        this.color = color;
        this.text = text;
    }

    render() {
        throw new Error("must be implemented by child object");
    }
}

module.exports = Shape;