// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Phone number
test("Check somestring expect false", () => {
    expect(functions.isPhoneNumber("somestring")).toBe(false);
});
test("Check 1111111111 expect false", () => {
    expect(functions.isPhoneNumber("1111111111")).toBe(false);
});
test("Check 630-460-1617 expect true", () => {
    expect(functions.isPhoneNumber("630-460-1617")).toBe(true);
});
test("Check 111-111-1111 expect true", () => {
    expect(functions.isPhoneNumber("630-460-1617")).toBe(true);
});

// Email
test("Check BLOCKOFSTRING expect false", () => {
    expect(functions.isEmail("BLOCKOFSTRING")).toBe(false);
});
test("Check emailatdomain.com expect false", () => {
    expect(functions.isEmail("emailatdomain.com")).toBe(false);
});
test("Check phedayat@ucsd.edu expect true", () => {
    expect(functions.isEmail("phedayat@ucsd.edu")).toBe(true);
});
test("Check dd@noemail.gov expect true", () => {
    expect(functions.isEmail("dd@noemail.gov")).toBe(true);
});

// Strong password
test("Check 1password expect false", () => {
    expect(functions.isStrongPassword("1password")).toBe(false);
});
test("Check psw expect false", () => {
    expect(functions.isStrongPassword("psw")).toBe(false);
});
test("Check super_StRing_2p expect true", () => {
    expect(functions.isStrongPassword("super_StRing_2p")).toBe(true);
});
test("Check mO2uf4_22 expect true", () => {
    expect(functions.isStrongPassword("mO2uf4_22")).toBe(true);
});

// Date
test("Check 6666666 expect false", () => {
    expect(functions.isDate("6666666")).toBe(false);
});
test("Check 1-1-08 expect false", () => {
    expect(functions.isDate("1-1-08")).toBe(false);
});
test("Check 09/09/2021 expect true", () => {
    expect(functions.isDate("09/09/2021")).toBe(true);
});
test("Check 12/12/2012 expect true", () => {
    expect(functions.isDate("12/12/2012")).toBe(true);
});

// Hex color
test("Check #_______ expect false", () => {
    expect(functions.isHexColor("#_______")).toBe(false);
});
test("Check password expect false", () => {
    expect(functions.isHexColor("password")).toBe(false);
});
test("Check FFFFFF color expect true", () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true);
});
test("Check #000000 expect true", () => {
    expect(functions.isHexColor("#000000")).toBe(true);
});