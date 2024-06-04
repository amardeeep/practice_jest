import { capitalize } from "./capitalize.js";
import { reverseString } from "./reverseString.js";
import { calculator } from "./calculator.js";
import { analyzeArray } from "./analyzeArray.js";
import { caesarCipher } from "./caesarCipher.js";
import expect from "expect";
//tests for capitalize
test("hello should return Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});
test("cello should return Cello", () => {
  expect(capitalize("cello")).toBe("Cello");
});
//tests for reverseString
test("hello should return olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});
test("moDi should return iDom", () => {
  expect(reverseString("moDi")).toBe("iDom");
});
//tests for calculator
test("sum of 2,3 returns 5", () => {
  expect(calculator(2, 3).sum).toBe(5);
});
test("difference of 9,3 returns 6", () => {
  expect(calculator(9, 3).difference).toBe(6);
});
test("product of 7,-1 returns -7", () => {
  expect(calculator(7, -1).product).toBe(-7);
});
test("dividion of 8 by 4 returns 2", () => {
  expect(calculator(8, 4).divide).toBe(2);
});
test("division by 0", () => {
  expect(calculator(3, 0).divide).toBe("Division not possible(Dividing by 0)");
});
//test for analyzeArray
test("average of [1,2,3,4,5] is 3", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
});
test("min of [9,3,5,6,-3] is -3", () => {
  expect(analyzeArray([9, 3, 5, 6, -3]).min).toBe(-3);
});
test("max of [9,7,8,69,0,-1]", () => {
  expect(analyzeArray([9, 7, 8, 69, 0, -1]).max).toBe(69);
});
test("length of[3,4,5] is 3", () => {
  expect(analyzeArray([3, 4, 5]).length).toBe(3);
});
//tests for caesarCipher
test("simple case", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});
test("wrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("capital letters", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("punctuations", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
