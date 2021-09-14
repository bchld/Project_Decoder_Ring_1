// Write your tests here!
const { expect } = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius", () => {
  it("should return coded message", () => {
    const expected = '4432423352125413';
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  });
  
  it("should return coded message if spaces and/or caps are preset in message", () => {
    const expected = '3251131343 2543241341';
    const actual = polybius("hello world");
    expect(actual).to.equal(expected);
  });
  
  it("should return decoded message if 3rd parameter is false", () => {
    const expected = 'hello world';
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);                                                });
  
  it("when decoding i or j both should be shown", () => {
    const expected = 'th(i/j)nkful';
    const actual = polybius("4432423352125413", false);
    expect(actual).to.equal(expected);
  });
  
  it("should return false if an odd number of characters are being decoded", () => {
    const expected = false;
    const actual = polybius("44324233521254134", false);
    expect(actual).to.equal(expected);
  });
});
