const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
  describe('Triangle', () => {
    it('should render a blue triangle with white text "SVG"', () => {
      const shape = new Triangle('blue');
      const expected = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="100" fill="white" font-size="40" text-anchor="middle" dy=".3em">SVG</text></svg>';
      expect(shape.render('SVG', 'white')).toEqual(expected);
    });
  });

  describe('Circle', () => {
    it('should render a green circle with white text "SVG"', () => {
      const shape = new Circle('green');
      const expected = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="50" fill="green" /><text x="150" y="100" fill="white" font-size="40" text-anchor="middle" dy=".3em">SVG</text></svg>';
      expect(shape.render('SVG', 'white')).toEqual(expected);
    });
  });

  describe('Square', () => {
    it('should render a red square with white text "SVG"', () => {
      const shape = new Square('red');
      const expected = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="100" height="100" fill="red" /><text x="150" y="100" fill="white" font-size="40" text-anchor="middle" dy=".3em">SVG</text></svg>';
      expect(shape.render('SVG', 'white')).toEqual(expected);
    });
  });
});
