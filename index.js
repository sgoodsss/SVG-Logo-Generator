// To Do
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

// Inquirer
const inquirer = require('inquirer');
// Jest
const jest = require(`jest`);
//File system
const fs = require("fs");
// Importing classes from shapes.js
const {Triangle, Circle, Square} = require(`./lib/shapes.js`)


// Created an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `Enter up to three characters for your logo.`,
        name: `characters`,
        validate: charactersInput => {
            if (!charactersInput) {
                console.log(`Please enter the characters for your logo!`)
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: `input`,
        // Figure out how to make the colors correspond and the hexademical number to work (Pick from a list)
        message: `What color would you like the text to be?  Enter a color name or hexadecimal number!`,
        name: `textColor`,
        validate: textColor => {
            if (!textColor) {
                console.log(`Please enter a color for your text!`)
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        message: 'Choose a shape for your logo:',
        choices: [`Circle`, `Triangle`, `Square`],
        name: 'shape',
        validate: shapeInput => {
            if (!shapeInput) {
                console.log(`Please select a shape!`)
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: `input`,
        // Figure out how to make the colors correspond and the hexademical number to work
        message: `What color would you like the shape to be?  Enter a color name or hexadecimal number!`,
        name: `shapeColor`,
        validate: shapeColorInput => {
            if (!shapeColorInput) {
                console.log(`Please enter a color for your shape!`)
                return false;
            } else {
                return true;
            }
        }
    }
]

function generateSVG(answers) {
    let userString = "";
    userString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
        //g tag puts text on top of polygon
        userString += "<g>";

    if (answers.shape === `Triangle`) {
        // Change to be instance of new triangle 
        // Apply text to it 
        const newTriangle = new Triangle; 
        userString += getSVG();
    } else if (answers.shape === `Square`) {
        const newSquare = new Square;
        userString += getSVG();
    } else {
        const newCircle = new Circle;
        // getSVG function is not working????
        userString += getSVG();
    }



}

// Prompts User with Questions
function runner() {
    return inquirer
        // Uses Questions Array
        .prompt(questions)
        .then((answers) => {
            fs.writeToFile(`${answers.characters}.svg`, generateSVG(answers));
            console.log(answers)
        })
        .then(() => console.log(`Generated logo.svg`))
        .then(console.log(`End Program`))
        .catch((error) => {
           console.log(error)
        });
}

runner();
