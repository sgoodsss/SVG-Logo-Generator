// Put classes for shapes here
// General class for shape
// Triangle, Rectangle, Circle

class Shapes {
    constructor(color) {
        this.color = color;
    }
}

class Triangle extends Shapes {
    getSVG() {
        console.log(`Triangle`)
        return `<polygon points="200,10 250,190 160,210" fill="${this.color}" />`
    }
}

class Circle extends Shapes {
    getSVG() {
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}

class Square extends Shapes {
    getSVG() {
        return `<rect width="300" height="100" fill="${this.color}" />`
    }
}


module.exports = {Triangle, Circle, Square}
