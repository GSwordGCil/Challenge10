const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:',
    },
  ]);

  const { text, textColor, shape, shapeColor } = answers;

  const ShapeClass = {
    circle: Circle,
    triangle: Triangle,
    square: Square,
  }[shape];

  const shapeInstance = new ShapeClass(shapeColor);
  const svgString = shapeInstance.render(text, textColor);

  fs.writeFileSync('logo.svg', svgString);

  console.log('Generated logo.svg');
}

promptUser();
