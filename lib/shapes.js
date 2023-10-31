class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render(text, textColor) {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.getShapeString()}<text x="150" y="100" fill="${textColor}" font-size="40" text-anchor="middle" dy=".3em">${text}</text></svg>`;
    }
  }
  
  class Triangle extends Shape {
    getShapeString() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    getShapeString() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    getShapeString() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  