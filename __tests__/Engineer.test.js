const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should set a github value", () => {
    const github = "morenom723";
    const eng = new Engineer("Michael", "1", "michael@email.com", github);
    expect(eng.github).toBe(github);
  });
});

describe("getGithub", () => {
  it("should return the github of the engineer", () => {
    const github = "morenom723";
    const eng = new Engineer("Michael", "1", "michael@email.com", github);

    expect(eng.getGithub()).toBe(github);
  });
});
