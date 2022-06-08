const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should return the name of the employee", () => {
    const name = "Michael";
    const base = new Employee(name);
    expect(base.name).toBe(name);
  });

  it("should return the id of the employee", () => {
    const id = "1";
    const base = new Employee("Michael", id);
    expect(base.id).toBe(id);
  });

  it("should return the email of the employee", () => {
    const email = "michael@email.com";
    const base = new Employee("Michael", "1", email);
    expect(base.email).toBe(email);
  });
});

describe("getName", () => {
  it("should retrieve the name from employee", () => {
    const name = "Michael";
    const base = new Employee(name);

    expect(base.getName()).toEqual(name);
  });
});

describe("getId", () => {
  it("should retrieve the id from employee", () => {
    const id = "1";
    const base = new Employee("Michael", id);

    expect(base.getID()).toEqual(id);
  });
});

describe("getEmail", () => {
  it("should retrieve the email from employee", () => {
    const email = "michael@email.com";
    const base = new Employee("Michael", "1", email);

    expect(base.getEmail()).toEqual(email);
  });
});

describe("getRole", () => {
  it("should retrieve the employee's role", () => {
    const role = "Employee";
    const base = new Employee("Michael", "1", "michael@email.com");

    expect(base.getRole()).toEqual(role);
  });
});
