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


//Main function to run team builder
function myTeam () {

// Function to trigger manager prompts
function manager () {  

    inquirer.prompt ([
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
]);
};

// Function to Select Employee by Role
//Then trigger employee prompts
function employee () {
    inquirer.prompt([{
      type: "list",
      message: "Select Employee role (Engineer or Intern):",
      name: "role",
      choices: ["Engineer", "Intern", "No Additional Employees"]
    }]).then(function (input) {
      switch(input.role) {
        case "Engineer":
          addengineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }
}

    // {
    //     type: "input",
    //     message: "Enter Managers Unique ID:",
    //     name: "id"
    // },
    // {
    //     type: "input",
    //     message: "Enter Managers Email Address:",
    //     name: "email"
    // },
    // {
    //     type: "input",
    //     message: "Enter Managers Office Number:",
    //     name: "officenumber"
    // },


    // {
    //     type: "list",
    //     name: "role",
    //     message: "Select Employee role (Engineer or Intern):",
    //     choices: ["Engineer", "Intern"]
    // },
    // {
    //     type: "input",
    //     message: "Enter:",
    //     name: "tests"
    // },
    // {
    //     type: "list",
    //     message: "Select a license",
    //     name: "license",
    //     choices: [
    //         "MIT",
    //         "Apache",
    //         "Eclipse Public",
    //         "GNU General Public",
    //         "Boost Software",
    //     ]
    // },
    // {
    //     type: "input",
    //     message: "Enter GITHUB user name:",
    //     name: "username"
    // },
    // {
    //     type: "input",
    //     message: "Enter email address:",
    //     name: "email"
    // }

  

