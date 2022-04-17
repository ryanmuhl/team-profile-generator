//run inquire promts to create a manager
//create rest of team after creating manager
//take infomration and plug it into html template (cards are hard coded in src file)
//write it to file and save it in the dist folder

// Allows interaction with the inquirer module
const inquirer = require("inquirer");

//Import the `fs` module to enable interaction with the file system
const fs = require("fs");

// const Employee = require ("./lib/Employee.js");
const Engineer = require ("./lib/Engineer.js");
const Intern = require ("./lib/Intern.js");
const Manager = require ("./lib/Manager.js");
const generateHTML = require ("./src/generateHTML.js")

const myTeamArray = [];


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

    //Pushes manager to array then loops back to start of questions
]).then(({name, id, email, officenumber}) =>
    {

        myTeamArray.push(new Manager (name, id, email, officenumber ))
    }).then(employee)

};

// Function to Select Employee by Role
//Then trigger employee prompts
const employee = () => {
    inquirer.prompt([{
      type: "list",
      message: "Select Employee role (Engineer or Intern):",
      name: "role",
      choices: ["Manager", "Engineer", "Intern", "No Additional Employees"]
    }]).then(function (input) {
      switch(input.role) {
          case "Manager":
          return manager()
          case "Engineer":
          return engineer();
          case "Intern":
          return intern();
          
          //If No Additional Employees Selected console log Team array
          //Generate HTML
          case "No Additional Employees":
              console.log(myTeamArray)
            //   fs.writeFile('./dist/team.html'), generateHTML(myTeamArray), ()=>console.log('Done!');
            htmlBuilder ()
            }
          })
        }
              
           
        
//engineer inquirer propt questions
const engineer = () => {  

    inquirer.prompt ([
    {
        type: "input",
        message: "Enter Engineer Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter Engineeer ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter Engineer Email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter Engineer GitHub:",
        name: "github"
    },

    //Pushes Engineer to array then loops back to start of questions
]).then(({name, id, email, github}) =>
{

    myTeamArray.push(new Engineer (name, id, email, github ))
}).then(employee)
};


//intern inquirer propt questions
const intern = () => {  

    inquirer.prompt ([
    {
        type: "input",
        message: "Enter Intern Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter Intern ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter Intern Email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter Intern School:",
        name: "university"
    },
    //Pushes Intern to array then loops back to start of questions
]).then(({name, id, email, university}) =>
{

    myTeamArray.push(new Intern (name, id, email, university ))
}).then(employee)
};


employee ()

function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync('./dist/team.html', generateHTML(myTeamArray))

}


    

  

