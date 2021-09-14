// Write your tests here!
const { expect } = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar", () => {
  it("should return coded message", () => {
    const expected = 'wklqnixo';
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });
  
  it("should return coded message if negative number input", () => {
    const expected = 'qefkhcri';
    const actual = caesar("thinkful", -3);
    expect(actual).to.equal(expected);
  });
  
  it("should return decoded message if 3rd parameter is false", () => {
    const expected = 'thinkful';
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);                                                });
  
  it("should return a coded message if spaces and/or caps are present", () => {
    const expected = 'bpqa qa i amkzmb umaaiom!';
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });
  
  it("should return a decoded message if spaces and/or caps are present and 3rd parameter is false", () => {
    const expected = 'this is a secret message!';
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });
  
  it("should return false if 2nd parameter is undefined", () => {
    const expected = false;
    const actual = caesar("thinkful");
    expect(actual).to.equal(expected);
  });
  
  it("should return false if 2nd parameter is greater than 25", () => {
    const expected = false;
    const actual = caesar("thinkful", 99);
    expect(actual).to.equal(expected);
  });
  
  it("should return false if 2nd parameter is less than -25", () => {
    const expected = false;
    const actual = caesar("thinkful", -26);
    expect(actual).to.equal(expected);
  });
});