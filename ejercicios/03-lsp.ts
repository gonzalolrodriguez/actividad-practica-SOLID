interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  private side: number;

  constructor(side: number) {
    this.side = side;
  }

  setSide(side: number): void {
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

function resizeRectangle(rectangle: Rectangle): void {
  rectangle.setWidth(5);
  rectangle.setHeight(10);
  console.log(`Área esperada del rectángulo (5x10): ${rectangle.area()}`);
}

// Función polimórfica que funciona con cualquier figura (cumple LSP)
function printArea(shape: Shape): void {
  console.log(`Área de la figura: ${shape.area()}`);
}

const rectangle = new Rectangle(1, 1);
resizeRectangle(rectangle);

const square = new Square(5);
printArea(square);
