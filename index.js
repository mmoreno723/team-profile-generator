const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

let employee;
let name;
let id;
let email;
let secondary;
let html = "";

const questions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the team member's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the team member's ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the team member's email:",
  },
];

let secondaryQuestion = [
  {
    type: "input",
    name: "officeNum",
    message: "Please enter the team member's office number:",
  },
];

const additionalMember = [
  {
    type: "confirm",
    name: "additonalMember",
    message: "Would you like to add another team member?",
  },
];

function addEmployee() {
  for (let i = 0; i < questions.length; i++) {
    inquirer.prompt(questions[i]).then((answers) => {
      name = answers.name;
      id = answers.id;
      email = answers.email;
    });
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the team member's title?",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((answer) => {
      if (answer.title == "Engineer") {
        createEngineer();
      } else {
        createIntern();
      }
    });

  inquirer.prompt(additionalMember).then((answer) => {
    if (answer.additionalMember) {
      addEmployee();
    }
  });
}

function createEngineer() {
  secondaryQuestion = [
    {
      type: "input",
      name: "github",
      message: "Please enter the team member's github account:",
    },
  ];

  inquirer.prompt(secondaryQuestion).then((answer) => {
    secondary = answer.github;
  });

  employee = new Engineer(name, id, email, secondary);
}

function createIntern() {
  secondaryQuestion = [
    {
      type: "input",
      name: "school",
      message: "Please enter the intern's school",
    },
  ];

  inquirer.prompt(secondaryQuestion).then((answer) => {
    secondary = answer.school;
  });

  employee = new Intern(name, id, email, secondary);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    name = answers.name;
    id = answers.id;
    email = answers.email;
  });

  inquirer.prompt(secondaryQuestion).then((answer) => {
    secondary = answer.office;
  });

  employee = new Manager(name, id, email, secondary);

  inquirer.prompt(additionalMember).then((answer) => {
    if (answer.additionalMember) {
      addEmployee();
    }
  });
}

init();
