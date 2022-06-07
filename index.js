const inquirer = require("inquirer");
const Employee = require("./lib/employee");

const value = new Employee();

function Manager(name, occupation, ID, email, officeNum) {
  this.name = name;
  this.occupation = occupation;
  this.ID = ID;
  this.email = email;
  this.officeNum = officeNum;
}

function EmployeeOne(name, occupation, ID, email, github) {
  this.name = name;
  this.occupation = occupation;
  this.ID = ID;
  this.email = email;
  this.github = github;
}

function EmployeeTwo(name, occupation, ID, email, github) {
  this.name = name;
  this.occupation = occupation;
  this.ID = ID;
  this.email = email;
  this.github = github;
}

function EmployeeThree(name, occupation, ID, email, github) {
  this.name = name;
  this.occupation = occupation;
  this.ID = ID;
  this.email = email;
  this.github = github;
}

function Intern(name, occupation, ID, email, school) {
  this.name = name;
  this.occupation = occupation;
  this.ID = ID;
  this.email = email;
  this.school = school;
}

// Manager.prototype.printInfo = function () {
//   console.log(
//     `Name: ${this.name}\nOccupation: ${this.occupation}\nID: ${this.ID}\nEmail: ${this.email}\nOffice Number: ${this.officeNum}`
//   );
//console.log("\n-------------\n");
//};

// EmployeeOne.prototype.printInfo = function () {
//     console.log(
//     `Name: ${this.name}\nOccupation: ${this.occupation}\nID: ${this.ID}\nEmail: ${this.email}\nGitHub: ${this.github}`
//   );
//console.log("\n-------------\n");
//};

// EmployeeTwo.prototype.printInfo = function () {
//   console.log(
//     `Name: ${this.name}\nOccupation: ${this.occupation}\nID: ${this.ID}\nEmail: ${this.email}\nGitHub: ${this.github}`
//   );
//console.log("\n-------------\n");
//};

// EmployeeThree.prototype.printInfo = function () {
//   console.log(
//     `Name: ${this.name}\nOccupation: ${this.occupation}\nID: ${this.ID}\nEmail: ${this.email}\nGitHub: ${this.github}`
//   );
//   console.log("\n-------------\n");
//};

// Intern.prototype.printInfo = function () {
//   console.log(
//     `Name: ${this.name}\nOccupation: ${this.occupation}\nID: ${this.ID}\nEmail: ${this.email}\nSchool: ${this.school}`
//   );
//   console.log("\n-------------\n");
//};

// const jeff = new Manager("Jeff", "Manager", 1, "email@email.com", 1);
// const alec = new EmployeeOne("Alec", "Engineer", 2, "alec@email.com", "alec1");
// const lindsey = new EmployeeTwo(
//   "Lindsey",
//   "Engineer",
//   3,
//   "lindsey@email.com",
//   "lindseyw"
// );
// const james = new EmployeeThree(
//   "James",
//   "Engineer",
//   4,
//   "james@email.com",
//   "jamesy2"
// );
// const molly = new Intern(
//   "Molly",
//   "Intern",
//   5,
//   "molly@email.com",
//   "Tech University"
// );

// jeff.printInfo();
// alec.printInfo();
// lindsey.printInfo();
// james.printInfo();
// molly.printInfo();

inquirer.prompt([
  {
    type: "input",
    message: "Please enter the name of the manager:",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is your manager's ID number?",
    name: "managerID",
  },
  {
    type: "input",
    message: "WHat is your manager's email address?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is your manager's office number?",
    name: "managerOfficeNum",
  },
  {
    type: "list",
    message: "Would you like to add an engineer or intern?",
    name: "Eng",
    choices: ["Engineer", "Intern"],
  },
]);
