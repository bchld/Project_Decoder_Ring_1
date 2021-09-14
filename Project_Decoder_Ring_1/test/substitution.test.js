// Write your tests here!
const { expect } = require("chai");
const {substitution} = require("../src/substitution");

describe("substitution", () => {
  it("should return coded message", () => {
    const expected = 'jrufscpw';
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  
  it("should return coded message if spaces are present", () => {
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  
  it("should return decoded message if 3rd parameter is false", () => {
    const expected = 'thinkful';
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal(expected);                                                });
  
  it("should return a coded message if special characters are in replacement alphabet", () => {
    const expected = 'y&ii$r&';
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  });
  
  it("should return a decoded message if special characters are in replacement alphabet and 3rd parameter is false", () => {
    const expected = 'message';
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal(expected);
  });
  
  it("should return false if 2nd parameter is less than 26 characters", () => {
    const expected = false;
    const actual = substitution("thinkful", "short");
    expect(actual).to.equal(expected);
  });
  
  it("should return false if 2nd parameter characters are not all unique", () => {
    const expected = false;
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(expected);
  });
});