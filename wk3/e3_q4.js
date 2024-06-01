class Shape {
    constructor() {
        if (this.constructor == Shape)
            throw new Error("This is an abstract class!");
    }
    area() {
        throw new Error("This is an abstract class!");
    }
    perimeter() {
        throw new Error("This is an abstract class!");
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    perimeter() {
        return 4 * this.side;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }
    area() {
        return Math.PI * this.r * this.r;
    }
    perimeter() {
        return 2 * Math.PI * this.r;
    }
}

const square = new Square(2);
console.log(square.area());
console.log(square.perimeter());

const circle = new Circle(3);
console.log(circle.area());
console.log(circle.perimeter());