const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, github) {
    super(name, 2, "mark@email.com");
    this.github = github;
  }
  getGithub() {
    console.log(`Github: ${this.github}`);
  }
  // getRole() // overridden to return 'Engineer'
}

const engineer = new Engineer("Mark", "markster");

engineer.getName();
engineer.getID();
engineer.getEmail();
engineer.getGithub();
module.exports = Engineer;
