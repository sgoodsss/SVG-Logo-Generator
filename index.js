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

function generateSVG(fileName, answers) {
    let userString = "";
    userString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
        //g tag puts text on top of polygon
        userString += "<g>";

    if (answers.shape === `Triangle`) {
        // Change to be instance of new triangle 
        // Apply text to it 
        const newTriangle = new Triangle(); 
        userString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`
    } else if (answers.shape === `Square`) {
        const newSquare = new Square();
        userString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`
    } else {
        const newCircle = new Circle();
        userString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`
    }

    userString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.characters}</text>`;
    userString += "</g>";
    userString += "</svg>";

    fs.writeFile(fileName, userString, (err) => {
        err ? console.log(err) : console.log(`Generated logo.svg`)
    })
}

function promptUser () {
    inquirer
        .prompt(questions)
        .then((answers) => {
            generateSVG(`logo.svg`, answers);
        })
}

promptUser();
