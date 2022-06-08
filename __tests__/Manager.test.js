const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should set an office number for the manager", () => {
    const officeNum = "3";
    const man = new Manager("Michael", "1", "michael@email.com", officeNum);
    expect(man.officeNum).toBe(officeNum);
  });
});

describe("getOfficeNum", () => {
  it("should return the office number of the manager", () => {
    const officeNum = "3";
    const man = new Manager("Michael", "1", "michael@email.com", officeNum);
    expect(man.getOfficeNum()).toBe(officeNum);
  });
});
