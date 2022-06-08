const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should set a school value", () => {
    const school = "Tech U";
    const int = new Intern("Michael", "1", "michael@email.com", school);
    expect(int.school).toBe(school);
  });
});

describe("getSchool", () => {
  it("should return the school of the intern", () => {
    const school = "Tech U";
    const int = new Intern("Michael", "1", "michael@email.com", school);

    expect(int.getSchool()).toBe(school);
  });
});
