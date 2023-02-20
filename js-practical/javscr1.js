
class Shape{

    constructor(color){
        this.color = color;
        this.type = 'Shape';
    }

    describe(){
        let res = `A ${this.color} ${this.type}`;
        console.log(res);
    }
}

class Square extends Shape{

    constructor(color,sidelength){
        super(color);
        this.sidelength = sidelength;
        this.type = 'Square';
    }

    area(){
        return (this.sidelength * this.sidelength);
    }
}

class Rectangle extends Shape{

    constructor(color,width,height){
        super(color);
        this.width = width;
        this.height = height;
        this.type = 'Rectangle';
    }

    area(){
        return (this.width * this.height);
    }
}


const square = new Square("blue",5);
const rectangle = new Rectangle("red",5,6);

console.log( square.area() ); // 25
console.log( rectangle.area() ); // 30

for ( const shape of [square, rectangle] ) shape.describe();