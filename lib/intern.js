const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, school) {
    super(name, 5, "mary@email.com");
    this.school = school;
  }
  getSchool() {
    console.log(`School: ${this.school}`);
  }
  // getRole {} // overridden to return 'Intern'
}

const intern = new Intern("Mary", "Tech University");

intern.getName();
intern.getID();
intern.getEmail();
intern.getSchool();
module.exports = Intern;
