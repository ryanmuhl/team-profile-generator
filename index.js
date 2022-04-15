//run inquire promts to create a manager
//create rest of team after creating manager
//take infomration and plug it into html template (cards are hard coded in src file)
//write it to file and save it in the dist folder

// Allows interaction with the inquirer module
const inquirer = require("inquirer");

//Import the `fs` module to enable interaction with the file system
const fs = require("fs");

const Employee = require ("./lib/Employee.js");
const Engineer = require ("./lib/Engineer.js");
const Intern = require ("./lib/Intern.js");
const Manager = require ("./lib/Manager.js");

//File Name/type to be generated after promts are answered
const fileName = "index.html";

const myTeamArray = [];

// Questions Array for future Prompts
const questions = [
    {
        type: "input",
        message: "Enter Team Manager Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter Managers Unique ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter Managers Email Address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter Managers Office Number:",
        name: "officenumber"
    },
    {
        type: "list",
        message: "Select Employees role (Engineer or Intern):",
        choices: ["Engineer", "Intern"]
    },
    {
        type: "input",
        message: "Enter:",
        name: "tests"
    },
    {
        type: "list",
        message: "Select a license",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "Eclipse Public",
            "GNU General Public",
            "Boost Software",
        ]
    },
    {
        type: "input",
        message: "Enter GITHUB user name:",
        name: "username"
    },
    {
        type: "input",
        message: "Enter email address:",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    
    // Create Markdown from data
    const readme = generateMarkdown(data);
    
    // Write Markdown file
    // If successful, Success! will display in console
    fs.writeFile(fileName, readme, function (err) {
        if (err) throw err;
        console.log("Success!");
    });
}
