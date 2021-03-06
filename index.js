const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
var role = "manager";
const allMembers = [];
const allMembersCard = [];

const addMember = (role) => {
  switch (role) {
    case "manager":
      info = "Office Number";
      break;
    case "engineer":
      info = "GitHub username";
      break;
    case "intern":
      info = "School";
      break;
  }

  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the ${role}'s name?`,
      },
      {
        type: "input",
        name: "id",
        message: `What is the ${role}'s ID #?`,
      },
      {
        type: "input",
        name: "email",
        message: `WHat is the ${role}'s email?`,
      },
      {
        type: "input",
        name: "info",
        message: `What is the ${role}'s ${info}?`,
      },
      {
        type: "list",
        name: "member",
        message: "Would you like to add anoter team member?",
        default: "Use arrow keys",
        choices: ["Engineer", "Intern", "No"],
      },
    ])

    .then((response) => {
      if (response.member === "Engineer") {
        saveInput(response, role);

        role = "engineer";
        addMember(role);
      } else if (response.member === "Intern") {
        saveInput(response, role);
        role = "intern";
        addMember(role);
      } else {
        saveInput(response, role);
        console.log(allMembers);
        fs.writeFile("TeamProfile.html", generateHTML(allMembers), (err) =>
          err ? console.error(err) : console.log("Success! HTML made!")
        );
      }
    });
};

saveInput = (response, role) => {
  delete response.member;
  allMembers.push(response);
  response.role = role;
};

const renderMemberCard = (allMembers) => {
  for (let i = 0; i < allMembers.length; i++) {
    switch (allMembers[i].role) {
      case "manager":
        role = "Manager";
        info = "Office Number: ";
        break;
      case "engineer":
        role = "Engineer";
        info = "Github Profile: ";
        break;
      case "intern":
        role = "Intern";
        info = "School: ";
        break;
    }

    const memberCard = `
    <div id="manager-card" class="card col-3 m-2" style="width: 20rem">
    <div class="card-body">
      <h5 id="manager-name" class="card-title">${allMembers[i].name}</h5>
      <h6 id="manager-occup" class="card-subtitle mb-2 text-muted">
        ${role}
      </h6>
      <ul class="list-group">
        <li id="managerID" class="list-group-item">ID: ${allMembers[i].id}</li>
        <li id="managerEmail" class="list-group-item">Email: ${allMembers[i].email}</li>
        <li id="managerOfficeNum" class="list-group-item">
          ${info}${allMembers[i].info}
        </li>
      </ul>
    </div>
  </div>`;
    allMembersCard.push(memberCard);
  }
  return allMembersCard.join("");
};

const generateHTML = (allMembers) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./dist/style.css" />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <div id="header" class="jumbotron">
        <h1 id="header-text" class="display-4 text-center">My Team</h1>
      </div>
      <div class="container">
        <div class="row">
          ${renderMemberCard(allMembers)}
        </div>
      </div>
    </body>
  </html>`;
};
addMember(role);
