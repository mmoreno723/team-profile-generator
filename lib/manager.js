const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, officeNumber) {
    super(name, 1, "jeff@email.com");
    this.officeNumber = officeNumber;
  }
  getOfficeNum() {
    console.log(`Office Number: ${this.officeNumber}`);
  }
  // getRole() // overridden to return 'Manager'
}

const manager = new Manager("Jeff", 8);

manager.getName();
manager.getID();
manager.getEmail();
manager.getOfficeNum();
module.exports = Manager;
